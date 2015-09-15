Ext.define('FavorITe.controller.RequestFavorForm', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            cancelFavorButton: 'button[action=cancelFavor]',
            submitFavorButton: 'button[action=submitFavor]',
            requestFavorForm: 'requestFavorForm'
        },
        control: {
            cancelFavorButton: {
                tap: 'cancelRequestFavorForm'
            },
            submitFavorButton: {
                tap: 'submitRequestFavorForm'
            }
        }
    },

    cancelRequestFavorForm: function() {
        Ext.getCmp('start').animateActiveItem(0, {type: 'flip'});
    },

    submitRequestFavorForm: function() {
        var requestFavorForm = this.getRequestFavorForm();
        var currentFavor = requestFavorForm.getRecord();
        var newValues = requestFavorForm.getValues();

        currentFavor.set('favorName', newValues.favorName);
        currentFavor.set('favorDesc', newValues.favorDesc);
        currentFavor.set('compensation', newValues.compensation);
        currentFavor.set('dateExpiring', newValues.dateExpiring);
        currentFavor.set('datePosted', new Date());
        
        var errors = currentFavor.validate();

        if (!errors.isValid()) {
            errors.each(function(item, index, length) {
                Ext.Msg.alert('Wait!', errors.getByField(item.getField())[0].getMessage(), Ext.emptyFn);
            });
            currentFavor.reject();
            return;
        }

        var allFavorsStore = Ext.getStore('AllFavorsStore');
        Ext.Ajax.request({
            url: 'http://localhost:8080/api/favors',
            method: 'POST',
            jsonData: currentFavor.data,
            success: function() {
                allFavorsStore.add(currentFavor);
                console.log("success");
            },
            failure: function() {
                console.log("wooops");
            }
        });
        allFavorsStore.sync();

        Ext.getCmp('start').animateActiveItem(0, {type: 'slide', direction: 'up'});
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});

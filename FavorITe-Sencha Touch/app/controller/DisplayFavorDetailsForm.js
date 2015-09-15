Ext.define('FavorITe.controller.DisplayFavorDetailsForm', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            backToHomeButton: 'button[action=backToHome]',
            acceptFavorButton: 'button[action=acceptFavor]',
            displayFavorDetailsForm: 'displayFavorDetailsForm'
        },
        control: {
            backToHomeButton: {
                tap: 'displayHome'
            },
            acceptFavorButton: {
                tap: 'acceptFavor'
            }
        }
    },

    displayHome: function() {
        Ext.getCmp('start').setActiveItem(0);
    },

    acceptFavor: function() {
        var displayFavorDetailsForm = this.getDisplayFavorDetailsForm();
        var allFavorsStore = Ext.getStore('AllFavorsStore');
        var acceptedFavorsStore = Ext.getStore('AcceptedFavorsStore')
        
        var currentFavor = displayFavorDetailsForm.getRecord();
        allFavorsStore.remove(currentFavor);
        acceptedFavorsStore.add(currentFavor);

        allFavorsStore.sync();
        acceptedFavorsStore.sync();
        Ext.Msg.alert('Wait!', "We have informed the poster of the message that you have offerred to complete the favor. Please do not begin the task till they confirm.", Ext.emptyFn);
        Ext.getCmp('start').setActiveItem(0);
    }
});
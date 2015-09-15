Ext.define('FavorITe.controller.RegistrationForm', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            registrationForm: 'registrationForm',
            registerUserButton: 'button[action=registerUser]'
        },
        control: {
            registerUserButton: {
                tap: 'createUser'
            }
        }
    },

    createUser: function() {
        var registrationForm = this.getRegistrationForm();
        var currentUser = registrationForm.getRecord();
        var values = registrationForm.getValues();

        currentUser.set('username', values.username);
        currentUser.set('password', values.password);
        currentUser.set('email', values.email);
        currentUser.set('mobile', values.mobile);

        var errors = currentUser.validate();

        if (!errors.isValid()) {
            errors.each(function(item, index, length) {
                Ext.Msg.alert('Wait!', errors.getByField(item.getField())[0].getMessage(), Ext.emptyFn);
            });
            currentUser.reject();
            return;
        }

        Ext.Ajax.request({
            url: 'http://localhost:8080/api/users',
            method: 'POST',
            jsonData: currentUser.data,
            success: function(conn, response) {
                if (conn.responseText === "") {
                    Ext.Msg.alert('Success!', 'Congratulations! You can now start FAVORing!', Ext.emptyFn);
                    Ext.getCmp('start').setActiveItem(0);
                } else {
                    Ext.Msg.alert('Oops!', conn.responseText, Ext.emptyFn);
                }
            }
        });

    }
});
Ext.define('FavorITe.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: [
        'FavorITe.model.Favor',
        'FavorITe.view.AllFavorsList',
        'FavorITe.view.Login',
        'FavorITe.view.AllFavors'
    ],
    
    config: {
        refs: {
            loginView: 'login',
            allFavorsView: 'allFavors',
            registrationForm: 'registrationForm',

            usernameField: '#usernameTextField',
            passwordField: '#passwordTextField',
            signInFailedLabel: '#signInFailedLabel',

            logInButton: 'button[action=login]',
            registrationButton: 'button[action=register]'
        },
        control: {
            logInButton: {
                tap: 'onLogInButtonTap'
            },
            registrationButton: {
                tap: 'onRegisterButtonTap'
            }
        }
    },

    onLogInButtonTap: function() {
        var me = this;
        console.log(this);

        var loginView = this.getLoginView();
        var usernameField = this.getUsernameField();
        var passwordField = this.getPasswordField();
        var label = this.getSignInFailedLabel();

        var username = usernameField.getValue();
        var password = passwordField.getValue();

        label.hide();

        var task = Ext.create('Ext.util.DelayedTask', function () {
            console.log(this);
            label.setHtml('');
            me.onSignInCommand(loginView, username, password);//The reason you are delaying the execution of this code for 500 milliseconds is that you want the label’s hide animation to finish before firing the singInCommand event.
            usernameField.setValue('');
            passwordField.setValue('');
        });
    
        task.delay(500);
    },

    onSignInCommand: function(loginView, username, password) {
        var me = this;
        var loginView = me.getLoginView();
        
        if (username.length === 0 || password.length === 0) {
            loginView.showSignInFailedMessage('Please enter your username and password.');
            return;
        }

        loginView.setMasked({
            xtype: 'loadmask',
            message: 'Signing In...'
        });

        Ext.Ajax.request({
            url: 'http://localhost:8080/login',
            method: 'GET',
            params: {
                user: username,
                pwd: password
            },

            success: function (response) {
                var loginResponse = Ext.JSON.decode(response.responseText);

                if (loginResponse.success === "true") {
                    // The server will send a token that can be used throughout the app to confirm that the user is authenticated.
                    me.sessionToken = loginResponse.sessionToken;
                    me.signInSuccess();     //Just simulating success.
                } else {
                    me.signInFailure(loginResponse.message);
                }
            },

            failure: function (response) {
                Ext.getCmp('start').setActiveItem(0);
                me.sessionToken = null;
                // me.signInFailure('Login failed. Please try again later.');
            }
        });

    },

    signInSuccess: function () {
        console.log('Signed in.');
        var loginView = this.getLoginView();
        var allFavorsView = this.getAllFavorsView();
        loginView.setMasked(false);
        Ext.getCmp('start').animateActiveItem(0, {type: 'slide', direction: 'left'});
    },

    signInFailure: function(message) {
        var loginView = this.getLoginView();
        loginView.showSignInFailedMessage(message);
        loginView.setMasked(false);
    },

    onRegisterButtonTap: function() {
        var user = Ext.create("FavorITe.model.User", {
            username: "",
            password: "",
            email: "",
            mobile: ""
        });

        this.getRegistrationForm().setRecord(user);
        Ext.getCmp('start').setActiveItem(3);
    }
    
});

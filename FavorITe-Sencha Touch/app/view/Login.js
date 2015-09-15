Ext.define('FavorITe.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.Password',
        'Ext.field.Text',
        'Ext.field.Email',
        'Ext.Img',
        'Ext.Label',
        'Ext.util.DelayedTask'
    ],

    config: {

        scrollable: true,
        styleHtmlContent: true,

        items: [
            {
                html: '<center><img src="..\\app\\logo.png" alt="panoramic image" width="400" height="300" border="0"></center>'
            },
            {
                xtype: 'label',
                html: 'Login failed. Please enter the correct credentials.',
                id: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            },
            {
                xtype: 'fieldset',
                instructions: 'New User? Register Now!',

                items: [
                    {
                        xtype: 'textfield',
                        name: 'username',
                        label: 'Username',
                        id: 'usernameTextField',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        label: 'Password',
                        id: 'passwordTextField',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Log In',
                id: 'logInButton',
                ui: 'round confirm',
                action: 'login'
            },
            {
                xtype: 'container',
                margin: '15 0'
            },
            {
                xtype: 'button',
                text: 'Register',
                ui: 'round decline',
                action: 'register'
            }
        ]

    },

    showSignInFailedMessage: function (message) {
        var label = Ext.getCmp('signInFailedLabel');
        label.setHtml(message);
        label.show();
    }

});
Ext.define('FavorITe.view.RegistrationForm', {
    extend: 'Ext.form.Panel',
    xtype:'registrationForm',
    fullscreen: 'true',

    requires: [
        'Ext.field.Email',
        'Ext.field.Number',
        'Ext.field.Text',
        'Ext.form.Password'
    ],

    config: {

        scrollable: true,
        styleHtmlContent: true,

        items: [
            {
                html: '<center><img src="..\\app\\logo.png" alt="panoramic image" width="400" height="300" border="0"></center>'
            },
            {
                xtype: 'fieldset',
                title: 'Registration Form',
                style: {
                    'text-align': 'center'
                },
                
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Username',
                        labelWrap: true,
                        name: 'username',
                        placeHolder: 'Enter Username',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        labelWrap: true,
                        name: 'password',
                        placeHolder: 'Enter Password',
                        required: true
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        labelWrap: true,
                        name: 'email',
                        placeHolder: 'email@example.com',
                        required: true
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Mobile Phone',
                        labelWrap: true,
                        name: 'mobile',
                        placeHolder: 'Enter Phone Number',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Register',
                ui: 'confirm',
                action: 'registerUser'
            }
        ]

    }

});
Ext.define('FavorITe.model.User', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'username', type: 'string' },
            { name: 'password', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'mobile', type: 'string' }
        ],
        validations: [
            { type: 'presence', field: 'username', message: 'Please choose a username' },
            { type: 'presence', field: 'password', message: 'Please choose a password' },
            { type: 'presence', field: 'email', message: 'Please write your email address' },
            { type: 'presence', field: 'mobile', message: 'Please write your 10 digit mobile number' },
            {
                type: 'format',
                field: 'username',
                matcher: /[0-9A-Za-z]{6,15}/,
                message: 'Username must contain between 6 and 15 characters'
            },
            {
                type: 'length',
                field: 'password',
                min: 6,
                message: 'Password must contain at least 6 characters'
            },
            {
                type: 'email',
                field: 'email',
                message: 'Email format is invalid'
            },
            {
                type: 'length',
                field: 'mobile',
                min: 10,
                max: 10,
                message: 'Mobile number should be 10 digits long'
            },
        ]
    },

    validate: function() {
        var errors = this.callParent(arguments);
        return errors;
    }
});
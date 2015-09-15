Ext.define('FavorITe.model.Favor', {
    extend: 'Ext.data.Model',
    requires: [
         'Ext.DateExtras'
    ],
    config: {
        fields: [
            { name: 'favorName', type: 'string' },
            { name: 'favorDesc', type: 'string' },
            { name: 'datePosted', type: 'date' },
            { name: 'compensation', type: 'string' },
            { name: 'dateExpiring', type: 'date' }
        ],
        validations: [
            { type: 'presence', field: 'favorName', message: 'Favor\'s missing a name!' },
            { type: 'presence', field: 'favorDesc', message: 'Mind explaining the favor a little more?' },
            { type: 'presence', field: 'dateExpiring' }
        ],
    },

    checkDates: function (errors) {
        if (this.get('datePosted') > this.get('dateExpiring')) {
            errors.add(Ext.create('Ext.data.Error', {
                field  : 'dateExpiring', 
                message: 'Expiry date can\'t be before today\'s date!'
            }));
        }
    },

    validate: function () {
        var errors = this.callParent(arguments);
        this.checkDates(errors);
        return errors;
    }
});
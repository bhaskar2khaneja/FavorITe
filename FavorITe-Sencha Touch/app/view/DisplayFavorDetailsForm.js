Ext.define('FavorITe.view.DisplayFavorDetailsForm', {
    extend: 'Ext.form.Panel',
    xtype: 'displayFavorDetailsForm',

    config: {

        scrollable: true,
        styleHtmlContent: true,

        items: [
            {
                xtype: 'toolbar',
                title: 'Favor Details',
                docked: 'top',

                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: 'Back',
                        action: 'backToHome'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                defaults: {
                    xtype: 'textfield',
                    readOnly: 'true',
                    labelWidth: '30%'
                },
                items: [
                    {
                        name: 'favorName',
                        label: 'Favor Name'
                    },
                    {
                        name: 'favorDesc',
                        label: 'Favor Description'
                    },
                    {
                        name: 'compensation',
                        label: 'Compensation'
                    },
                    {
                        name: 'dateExpiring',
                        label: 'Favor Expiry Date'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Accept Favor',
                ui: 'confirm',
                action: 'acceptFavor'
            }
        ]

    }
});
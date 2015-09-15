Ext.define('FavorITe.view.RequestFavorForm', {
    extend: 'Ext.form.Panel',
    xtype: 'requestFavorForm',
    fullscreen: true,

    requires: [
        'Ext.TitleBar',
        'Ext.form.FieldSet',
        'Ext.field.DatePicker',
        'Ext.ux.field.DateTimePicker',
        'Ext.ux.picker.DateTime'
    ],

    config: {

        scrollable: true,
        styleHtmlContent: true,

        items: [
            {
                xtype: 'toolbar',
                title: 'Edit Favor',
                docked: 'top',

                items: [
                    {
                        xtype: 'button',
                        text: 'Cancel',
                        ui: 'decline',
                        action: 'cancelFavor'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                instructions: 'Compensation denotes any EXTRA amount that you are willing to pay to get your favor done. Please write $0 if none.',

                items: [
                    {
                        xtype: 'textfield',
                        name: 'favorName',
                        label: 'Favor Name',
                        required: true
                    },
                    {
                        xtype: 'textareafield',
                        name: 'favorDesc',
                        label: 'Favor Description',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'compensation',
                        label: 'Compensation'
                    },
                    {
                        xtype: 'datetimepickerfield',
                        name: 'dateExpiring',
                        label: 'Favor Expiry Date',
                        tpl: 'date("F j, Y, g:i a")',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Submit Favor',
                ui: 'confirm',
                action: 'submitFavor'
            }
        ]
    }
});
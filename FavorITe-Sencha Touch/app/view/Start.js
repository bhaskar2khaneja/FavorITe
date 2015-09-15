Ext.define('FavorITe.view.Start', {
    extend: 'Ext.Panel',
    xtype: 'start',
    id: 'start',

    requires: [
        'Ext.TitleBar'
    ],

    config: {
        layout: 'card',
        items: [
            {
                xtype: 'main'
            },
            {
                xtype: 'requestFavorForm'
            },
            {
                xtype: 'displayFavorDetailsForm'
            },
            {
                xtype: 'registrationForm'
            },
            {
                xtype: 'login'
            }
        ]
    }    
});
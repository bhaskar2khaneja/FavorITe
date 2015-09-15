Ext.define('FavorITe.view.Settings', {
    extend: 'Ext.Panel',
    xtype: 'settings',
    id: 'settings',
    
    requires: [
        'Ext.TitleBar'
    ],

    config: {
        title: 'My Settings',

        scrollable: true,
        styleHtmlContent: true,

        items: [
            {
                xtype: 'toolbar',
                title: 'My Settings',
                docked: 'top',

                items: [
                    {
                        xtype: 'sideMenu'
                    }
                ]
            }
        ],

        html: [
            '<h1> Settings </h1>'
        ].join("")
    }
});
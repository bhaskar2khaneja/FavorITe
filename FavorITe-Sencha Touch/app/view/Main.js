Ext.define('FavorITe.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'main',

    requires: [
        'Ext.TitleBar',
        'Ext.Menu'
    ],
    
    config: {

        tabBarPosition: 'bottom',
        activeItem: 1,

        items: [
            {
                xtype: 'myRequestedFavors'
            },
            {
                xtype: 'allFavors'
            },
            {
                xtype: 'myAcceptedFavors'
            }
        ]

    }
});

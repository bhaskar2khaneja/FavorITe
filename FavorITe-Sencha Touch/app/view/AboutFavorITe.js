Ext.define('FavorITe.view.AboutFavorITe', {
    extend: 'Ext.Panel',
    xtype: 'about',
    requires: [
        'Ext.TitleBar',
        'FavorITe.view.Carousel'
    ],

    config: {
        title: 'About FavorITe!',
        iconCls: 'action',

        items: [
            {
                xtype: 'toolbar',
                title: 'About FavorITe!',
                docked: 'top',
                
                items: [
                    {
                        xtype: 'sideMenu'
                    }
                ]
            },
            {
                xtype: 'carouselFavor'
            }
        ]
    }
});
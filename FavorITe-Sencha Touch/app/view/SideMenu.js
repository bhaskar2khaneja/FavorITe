Ext.define('FavorITe.view.SideMenu', {
    extend: 'Ext.Panel',
    xtype: 'sideMenu',  

    config: {

        layout: {
            type: 'hbox'
        },

        items: [
            {
                xtype: 'button',
                iconCls: 'list',
                ui: 'plain',
                action: 'toggleMenu'
            }
        ]
    }
});
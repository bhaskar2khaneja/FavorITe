Ext.define('FavorITe.view.MyRequestedFavors', {
    extend: 'Ext.Container',
    xtype: 'myRequestedFavors',

    requires: [
        'Ext.TitleBar'
    ],

    initialize: function() {
        this.element.on ({
            tap: function() {
                Ext.Viewport.hideMenu('left');
            }
        })
    },

    config: {

        title: 'Requested Favors',
        iconCls: 'compose',

        scrollable: true,
        styleHtmlContent: true,
        layout: 'fit',

        items: [
            {
                xtype: 'toolbar',
                title: 'My Requested Favors',
                docked: 'top'
            },
            {
                xtype: 'myRequestedFavorsList'
            }
        ]

    }
});
Ext.define('FavorITe.view.MyAcceptedFavors', {
    extend: 'Ext.Container',
    xtype: 'myAcceptedFavors',

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

        title: 'Accepted Favors',
        iconCls: 'star',

        scrollable: true,
        styleHtmlContent: true,
        layout: 'fit',

        items: [
            {
                xtype: 'toolbar',
                title: 'My Accepted Favors',
                docked: 'top'
            },
            {
                xtype: 'myAcceptedFavorsList'
            }
        ]

    }
});
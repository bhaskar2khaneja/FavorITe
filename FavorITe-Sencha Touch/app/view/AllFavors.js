Ext.define('FavorITe.view.AllFavors', {
    extend: 'Ext.Container',
    xtype: 'allFavors',

    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.DateExtras',
        'FavorITe.view.AllFavorsList'
    ],

    initialize: function() {
        this.element.on ({
            tap: function() {
                Ext.Viewport.hideMenu('left');
            }
        })
    },

    config: {

        title: 'All Favors',
        iconCls: 'home',
        layout: 'fit',

        scrollable: true,
        styleHtmlContent: true,

        items: [
            {
                xtype: 'toolbar',
                title: 'All Favors in FavorITe!',
                docked: 'top',

                items: [
                    {
                        xtype: 'button',
                        iconCls: 'list',
                        ui: 'plain',
                        action: 'toggleMenu'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: 'Add',
                        iconCls: 'add',
                        action: 'addFavor'
                    }
                ]
            },
            {
                xtype: 'allFavorsList'
            }
        ]

    }
});
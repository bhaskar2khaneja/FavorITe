Ext.define('FavorITe.controller.AllFavors', {
    extend: 'Ext.app.Controller',
    requires: [
        'FavorITe.model.Favor',
        'FavorITe.view.AllFavorsList'
    ],
    
    config: {
        refs: {
            addFavorButton: 'button[action=addFavor]',
            toggleMenuButton: 'button[action=toggleMenu]',
            requestFavorForm: 'requestFavorForm',
            displayFavorDetailsForm: 'displayFavorDetailsForm',
            allFavorsList: 'allFavorsList'
        },
        control: {
            addFavorButton: {
                tap: 'requestFavor'
            },
            toggleMenuButton: {
                tap: 'toggleSideMenu'
            },
            allFavorsList: {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(list, index, target, record) {
        var displayFavorDetailsForm = this.getDisplayFavorDetailsForm();
        displayFavorDetailsForm.setRecord(record);
        Ext.getCmp('start').setActiveItem(2);
    },

    requestFavor: function() {
        var now = new Date();
        var exp = new Date(now.getTime());
        exp.setHours(exp.getHours() + 1);
        var favor = Ext.create('FavorITe.model.Favor', {
            favorName: '',
            favorDesc: '',
            compensation: '',
            datePosted: now,
            dateExpiring: exp
        });

        this.getRequestFavorForm().setRecord(favor);
        Ext.getCmp('start').animateActiveItem(1, {type: 'flip'});
    },

    toggleSideMenu: function() {
        if (Ext.Viewport.getMenus().left.isHidden()) {
            Ext.Viewport.showMenu('left');
        } else {
            Ext.Viewport.hideMenu('left');
        }
    },

    createMenu: function() {
        var items = [
            {
                xtype : 'list',
                itemTpl : '{title}',
                data : [
                    {title : 'Home'},
                    {title : 'About'},
                    {title : 'Log Off'}
                ],
                listeners: {
                    select: function(view, record) {

                        if (record.data.title == "Home") {
                            Ext.Viewport.hideMenu('left');
                            Ext.getCmp('start').setActiveItem(0);
                        } else if (record.data.title == "About") {
                            Ext.Viewport.hideMenu('left');
                            Ext.getCmp('start').setActiveItem(0);
                        } else if (record.data.title == "Log Off") {
                            Ext.Viewport.hideMenu('left');
                            this.onSignOffCommand();
                        }
                    }
                }
            }
        ]

        return Ext.create('Ext.Menu', {
            style: 'padding: 0',
            id: 'menu',
            width: 200,
            height : "100%",
            layout : 'fit',
            scrollable: 'vertical',
            items: items
        });
    },

    onSignOffCommand: function() {
        var me = this;

        Ext.Ajax.request({
            url: '../../services/logoff.ashx',
            method: 'post',
            params: {
                sessionToken: me.sessionToken
            },
            success: function(response) {

            },
            failure: function(response) {

            }
        });

        
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        Ext.Viewport.setMenu(this.createMenu(), {
            side: 'left',
            reveal: true
        });
    }
});

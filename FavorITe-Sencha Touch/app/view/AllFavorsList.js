Ext.define('FavorITe.view.AllFavorsList', {
    extend: 'Ext.dataview.List',
    xtype: 'allFavorsList',
    
    config: {

        scrollable: true,
        styleHtmlContent: true,

        store: 'AllFavorsStore',
        itemTpl: '<h3> {favorName} </h3> ' + '<p> {favorDesc} </p><br>' + '<strong> Expires: </strong> {dateExpiring:date("F j, Y, g:i a")} '
    }
});
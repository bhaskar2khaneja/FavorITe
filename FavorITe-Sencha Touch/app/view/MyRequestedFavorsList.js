Ext.define('FavorITe.view.MyRequestedFavorsList', {
    extend: 'Ext.dataview.List',
    xtype: 'myRequestedFavorsList',
    
    config: {

        scrollable: true,
        styleHtmlContent: true,

        store: 'RequestedFavorsStore',
        itemTpl: '<h3> {favorName} </h3> ' + '<p> {favorDesc} </p><br>' + '<strong> Expires: </strong> {dateExpiring:date("F j, Y, g:i a")} '
    }
});
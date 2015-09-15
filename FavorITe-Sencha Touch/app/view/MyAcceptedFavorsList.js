Ext.define('FavorITe.view.MyAcceptedFavorsList', {
    extend: 'Ext.dataview.List',
    xtype: 'myAcceptedFavorsList',
    
    config: {

        scrollable: true,
        styleHtmlContent: true,

        store: 'AcceptedFavorsStore',
        itemTpl: '<h3> {favorName} </h3> ' + '<p> {favorDesc} </p><br>' + '<strong> Expires: </strong> {dateExpiring:date("F j, Y, g:i a")} '
    }
});
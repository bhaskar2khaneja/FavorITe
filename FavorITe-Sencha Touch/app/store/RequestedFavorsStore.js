Ext.define('FavorITe.store.RequestedFavorsStore', {
    extend: 'Ext.data.Store',

    requires: [
       
    ],

    config: {
        model: 'FavorITe.model.Favor',
        sorters: [{
            property: 'datePosted',
            direction: 'DESC'
        }]
    }
});
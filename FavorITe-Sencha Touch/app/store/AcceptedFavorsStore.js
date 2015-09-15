Ext.define('FavorITe.store.AcceptedFavorsStore', {
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
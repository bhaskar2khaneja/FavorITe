Ext.define('FavorITe.store.AllFavorsStore', {
    extend: 'Ext.data.Store',

    requires: [
        // 'Ext.data.proxy.LocalStorage'
    ],

    config: {
        model: 'FavorITe.model.Favor',
        sorters: [{
            property: 'datePosted',
            direction: 'DESC'
        }],
        proxy: {
            // type: 'localstorage',
            // id: 'allFavorsStorage'
            type: 'rest',
            url: 'https://localhost:8080/api/favors',
            reader: {
                type: 'json',
                root: 'data'
            },
            writer: {
                type: 'json'
            }
        },
        autoLoad: true,
        // autoSync: true
    }
});
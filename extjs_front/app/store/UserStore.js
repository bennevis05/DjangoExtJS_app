Ext.define('UserApp.store.UserStore', {
    extend: 'Ext.data.Store',
    model: 'UserApp.model.User',
    autoLoad: true,
    storeId: 'UserStore',
    proxy: {
        type: 'ajax',
        url: 'http://127.0.0.1:8000/api/v1/users/',
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});
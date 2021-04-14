Ext.define('UserApp.controller.Users', {
    extend: 'Ext.app.Controller',
 
    views: ['UserList', 'User'],
    stores: ['UserStore'],
    models: ['User'],

    init: function() {
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'userwindow button[action=new]': {
                click: this.createUser
            },
            'userwindow button[action=save]': {
                click: this.updateUser
            },
            'userwindow button[action=delete]': {
                click: this.deleteUser
            },
            'userwindow button[action=clear]': {
                click: this.clearForm
            }
        });
    },
    
    updateUser: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            id = form.getRecord().get('id');
            values.id = id;

        Ext.Ajax.request({
            url: 'http://127.0.0.1:8000/api/v1/users/' + id + '/',
            method: 'PUT',
            params: values,
            success: function(response){
                if(response.status == 200) {
                    var store = Ext.widget('userlist').getStore();
                    store.load();
                    Ext.Msg.alert('Обновление', 'Успешно');
                }
                else{
                    Ext.Msg.alert('Обновление','Не удалось обновить книгу в библиотеке');
                }
            }
        });
    },
    
    createUser: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();

        Ext.Ajax.request({
            url: 'http://127.0.0.1:8000/api/v1/users/',
            params: values,
            success: function(response, options) {
                if(response.status == 201) {
                    Ext.Msg.alert('Создание', 'Успешно');
                    var store = Ext.widget('userlist').getStore();
                    store.load();
                    store.add(values);
                }
                else{
                    Ext.Msg.alert('Создание','Не удалось добавить книгу в библиотеку');
                }
            }
        });
    },
    
    deleteUser: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            id = form.getRecord().get('id');

        Ext.Ajax.request({
            url: 'http://127.0.0.1:8000/api/v1/users/' + id + '/',
            method: 'DELETE',
            params: {id: id},
            success: function(response){
                if(response.status == 204) {
                    Ext.Msg.alert('Удаление', 'Успешно');
                    var store = Ext.widget('userlist').getStore();
                    var record = store.getById(id);
                    store.remove(record);
                    form.getForm().reset();
                }
                else{
                    Ext.Msg.alert('Удаление','Не удалось удалить книгу из библиотеки');
                }
            }
        });
    },

    clearForm: function(grid, record) {
        var view = Ext.widget('userwindow');
        view.down('form').getForm().reset();
    },

    editUser: function(grid, record) {
        var view = Ext.widget('userwindow');
        view.down('form').loadRecord(record);
    }
});
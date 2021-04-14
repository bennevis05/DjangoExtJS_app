Ext.define('UserApp.view.UserList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',
 
    title: 'Пользователи',
    store: 'UserStore',
     
    initComponent: function() {
        this.columns = [
            {header: 'E-mail',  dataIndex: 'email',  flex: 1},
            {header: 'Никнейм',  dataIndex: 'username',  flex: 1},
            {header: 'Имя', dataIndex: 'first_name', flex: 1},
            {header: 'Фамилия', dataIndex: 'last_name', flex: 1},
            {header: 'Возраст', dataIndex: 'age', flex: 1}
        ];
         
        this.callParent(arguments);
    }
});
Ext.define('UserApp.view.User', {
    extend: 'Ext.window.Window',
    alias: 'widget.userwindow',
 
    title: 'Пользователь',
    layout: 'fit',
    autoShow: true,
 
    initComponent: function() {
        this.items = [{
                xtype: 'form',
                items: [{
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'E-mail'
                    }, {
                        xtype: 'textfield',
                        name : 'username',
                        fieldLabel: 'Никнейм'
                    }, {
                        xtype: 'textfield',
                        name : 'first_name',
                        fieldLabel: 'Имя',
                    }, {
                        xtype: 'textfield',
                        name : 'last_name',
                        fieldLabel: 'Фамилия'
                    }, {
                        xtype: 'textfield',
                        name : 'age',
                        fieldLabel: 'Возраст'
                }]
            }];
        this.dockedItems = [{
                xtype:'toolbar',
                docked: 'top',
                items: [{
                    text:'Создать',
                    action: 'new'
                },{
                    text:'Сохранить',
                    action: 'save'
                },{
                    text:'Удалить',
                    action: 'delete'
                }]
            }];
        this.buttons = [{
                text: 'Очистить',
                scope: this,
                action: 'clear'
        }];
 
        this.callParent(arguments);
    }
});
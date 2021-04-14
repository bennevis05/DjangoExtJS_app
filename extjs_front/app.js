Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'UserApp',
    appFolder: 'app',
    controllers: ['Users'],
     
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'userlist'
            }
        });
    }
});
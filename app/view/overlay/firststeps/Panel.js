/**
 * First steps panel which overlays main panel if no username is given
 */
Ext.define('Kort.view.overlay.firststeps.Panel', {
	extend: 'Ext.Panel',
	alias: 'widget.firststepspanel',
    requires: [
        'Ext.form.Panel',
        'Ext.Button',
        'Ext.field.Text'
    ],

	config: {
		id: 'firststepsPanel',
		layout: 'vbox',
        modal: true,
        scrollable: true,
        cls: 'overlayLeafletMap',
        
        showAnimation: {
            type: 'slideIn',
            direction: 'down'
        },
        hideAnimation: {
            type: 'slideOut',
            direction: 'up'
        },
        
		items: [
			{
                html:   '<div class="overlay-content">' +
                            '<div class="logo">' +
                                '<img src="./resources/images/kort-logo.png" />' +
                            '</div>' +
                            '<div class="introduction">' +
                                Ext.i18n.Bundle.message('firststeps.introduction.1') +
                                Kort.util.Config.getKortTitle() +
                                Ext.i18n.Bundle.message('firststeps.introduction.2') +
                            '</div>' +
                        '</div>'
			},
            {
                xtype: 'formpanel',
                id: 'usernameForm',
                scrollable: false,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'textfield',
                        cls: 'usernameTextfield',
                        name: 'username',
                        // i18n bundle doens't work for placeholders -> get text from config
                        placeHolder: Kort.util.Config.getFormPlaceholders().username
                    },
                    {
                        xtype: 'button',
                        ui: 'confirm',
                        id: 'firststepsFormSubmitButton',
                        text: Ext.i18n.Bundle.message('firststeps.form.button.submit')
                    }
                ]
            }
		]
	}
});
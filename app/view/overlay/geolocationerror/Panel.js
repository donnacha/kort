Ext.define('Kort.view.overlay.geolocationerror.Panel', {
	extend: 'Ext.Panel',
	alias: 'widget.geolocationerrorpanel',
    requires: [
        'Ext.Button'
    ],

	config: {
		id: 'geolocationerrorPanel',
		layout: 'vbox',
        modal: true,
        scrollable: true,
        cls: 'overlayLeafletMap',
        
		items: [
			{
                html:   '<div class="overlay-content">' +
                            '<div class="logo">' +
                                '<img src="./resources/images/kort-logo.png" />' +
                            '</div>' +
                            '<div class="sadsmiley">:(</div>' +
                            '<div class="introduction">' +
                                Ext.i18n.Bundle.message('geolocationerror.introduction.1') +
                                Kort.util.Config.getKortTitle() +
                                Ext.i18n.Bundle.message('geolocationerror.introduction.2') +
                            '</div>' +
                        '</div>'
			},
            {
                xtype: 'button',
                id: 'geolocationerrorReloadButton',
                text: Ext.i18n.Bundle.message('geolocationerror.button.reload'),
                ui: 'confirm'
            }
		]
	}
});
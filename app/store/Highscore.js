/**
 * Store for highscore entries
 */
Ext.define('Kort.store.Highscore', {
    extend: 'Ext.data.Store',

	config: {
		model: 'Kort.model.HighscoreEntry',

		proxy: {
			type: 'rest',
            url: Kort.util.Config.getWebservices().highscore.url,
            pageParam: false,
            startParam: false,
            extraParams: {
                'lang': Ext.i18n.Bundle.guessLanguage(),
                'limit': Kort.util.Config.getWebservices().highscore.limit
            },
            sorters: 'place',
            reader: {
                type: 'json',
                rootProperty: 'return'
            }
		}
	}
});

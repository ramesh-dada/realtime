import app from 'flarum/admin/app';

app.initializers.add('ramesh-dada-realtime', () => {
    app.extensionData.for('ramesh-dada-realtime').registerSetting({
        setting: 'ramesh-dada-realtime.polling-interval',
        label: app.translator.trans('ramesh-dada-realtime.admin.settings.polling-interval'),
        help: app.translator.trans('ramesh-dada-realtime.admin.settings.polling-interval-help'),
        type: 'number',
    });
});

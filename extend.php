<?php

namespace ramesh\realtime;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    (new Extend\Locales(__DIR__.'/resources/locale')),

    (new Extend\Settings())
        ->serializeToForum('realtime.interval', 'ramesh-dada-realtime.polling-interval', function ($value) {
            return empty($value) ? 2000 : (int) $value;
        }),
];

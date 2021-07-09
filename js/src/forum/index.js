import app from 'flarum/forum/app';
import addDiscussionPagePooling from './addDiscussionPagePolling';

/* 1Dot Realtime */

app.initializers.add('ramesh-dada-custom-realtime', () => {
    addDiscussionPagePooling();
});

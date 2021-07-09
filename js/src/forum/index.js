import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';

/* 1Dot Realtime */

app.initializers.add('ramesh-dada-custom-realtime', () => {
  extend(DiscussionPage.prototype, 'oncreate', function() {
    setInterval(()=> {
      app.store.find('discussions', this.discussion.id()).then(() => {
        this.stream.update();
      })
    }, 1000);
})
});

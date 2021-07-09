import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import PostStream from 'flarum/forum/components/PostStream';


/* 1Dot Realtime */

app.initializers.add('ramesh-dada-custom-realtime', () => {
  extend(PostStream.prototype, 'view', function (vdom) {
      app.store.find('discussions', this.discussion.id()).then(() => {
        this.stream.update();
      })
})
});

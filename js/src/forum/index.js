import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import Button from 'flarum/common/components/Button';

/* global m */
const canStartDiscussion = app.forum.attribute('canStartDiscussion') || !app.session.user;
app.initializers.add('ramesh-dada-mobile-flarum-newdiscuss', () => {
    extend(IndexPage.prototype, 'viewItems', function (items) {
    items.add(
      'newDiscussion',
      Button.component(
        {
          icon: 'fas fa-edit',
          className: 'Button Button--primary IndexPage-newDiscussion',
          itemClassName: 'App-primaryControl',
          onclick: () => {
            // If the user is not logged in, the promise rejects, and a login modal shows up.
            // Since that's already handled, we dont need to show an error message in the console.
            return this.newDiscussionAction().catch(() => {});
          },
          disabled: !canStartDiscussion,
        },
        app.translator.trans(canStartDiscussion ? 'core.forum.index.start_discussion_button' : 'core.forum.index.cannot_start_discussion_button')
      )
    );
    });
});

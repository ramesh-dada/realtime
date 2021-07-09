import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';

export default function () {
    extend(DiscussionPage.prototype, 'oncreate', function () {
        this.pollingInterval = setInterval(() => {
            app.store.find('discussions', this.discussion.id()).then(() => {
                this.stream.update().then(m.redraw);
            });
        }, 2000);
    });

    extend(DiscussionPage.prototype, 'onremove', function () {
        // Clear interval when user leaves the discussion
        clearInterval(this.pollingInterval);
    });
}

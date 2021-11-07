import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default class AlbumsRoute extends Route {
    async model() {
      return RSVP.hash({
        albums: this.store.findAll('album'),
        songs: this.store.findAll('song')
      });
    }
  }
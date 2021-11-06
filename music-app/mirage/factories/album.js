import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

let minSong = 3;
let maxSong = 10;
let songQuantity = () => Math.floor(Math.random() * (maxSong - minSong + 1)) + minSong;

export default Factory.extend({
    name() {
        return faker.random.word();
    },

    afterCreate(album, server) {
        server.createList('song',  songQuantity(), { album });
      }

});

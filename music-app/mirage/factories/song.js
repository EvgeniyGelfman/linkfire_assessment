import { Factory, association } from 'ember-cli-mirage';
import faker from 'faker';

let minArt = 1;
let maxArt = 5;
let artQuantity = () => Math.floor(Math.random() * (maxArt - minArt + 1)) + minArt;

export default Factory.extend({
    name() {
        return  faker.lorem.sentence();
    },

    album: association(),

    genre: association(),

    afterCreate(song, server) {
        server.createList('artist',  artQuantity(), { song });
      }

});

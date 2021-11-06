import { Factory, association } from 'ember-cli-mirage';
import faker from 'faker';

import {getRandomQuantity} from '../lib/get-random-quantity';

export default Factory.extend({
    name() {
        return  faker.lorem.sentence();
    },

    album: association(),

    genre: association(),

    afterCreate(song, server) {
        server.createList('artist',  getRandomQuantity(1, 5), { song });
        server.create('genre');
      }

});

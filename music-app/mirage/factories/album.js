import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

import {getRandomQuantity} from '../lib/get-random-quantity';

export default Factory.extend({
    name() {
        return faker.random.word();
    },

    afterCreate(album, server) {
        server.createList('song',  getRandomQuantity(3, 10), { album });
      }

});

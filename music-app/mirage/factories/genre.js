import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

import {getRandomQuantity} from '../../app/helpers/lib/get-random-quantity';

export default Factory.extend({
    name() {
        return faker.music.genre()
    },

    afterCreate(genre, server) {
        server.createList('song', getRandomQuantity(3, 10), genre);
    }
});

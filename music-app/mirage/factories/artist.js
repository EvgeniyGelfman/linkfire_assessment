import { Factory, association } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
    name() {
        return faker.name.firstName() + ' ' + faker.name.lastName()
    },

    // song: association()
});

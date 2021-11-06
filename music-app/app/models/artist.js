import Model, {attr, belongsTo} from '@ember-data/model';

export default class ArtistModel extends Model{
    @attr name;
    @belongsTo song;
}

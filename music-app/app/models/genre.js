import Model, {attr, hasMany} from '@ember-data/model';

export default class GenreModel extends Model{
    @attr name;
    @hasMany song;
}

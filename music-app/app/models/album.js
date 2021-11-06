import Model, {attr, hasMany} from '@ember-data/model';

export default class AlbumModel extends Model{
    @attr name;
    @hasMany song;
}

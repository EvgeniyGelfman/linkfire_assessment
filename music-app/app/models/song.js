import Model, {belongsTo, attr, hasMany} from '@ember-data/model';

export default class SongModel extends  Model{
    @attr name;
    @hasMany artist;
    @belongsTo genre;
    @belongsTo album;
}

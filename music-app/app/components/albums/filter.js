import Component from '@glimmer/component';

export default class AlbumsFilterComponent extends Component {
  get results() {
    let { albums, query } = this.args;

    if (query && query.length > 2) {
      albums = albums.filter((album) => album.name.includes(query));
    }

    return albums;
  }
}
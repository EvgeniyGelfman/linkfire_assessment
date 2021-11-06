import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AlbumsComponent extends Component {
  @tracked query = '';
}
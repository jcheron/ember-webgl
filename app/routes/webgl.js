import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { demoCube } from '../webgl/demo-cube';

export default class WebglRoute extends Route {
  @action run(sel){
    demoCube(sel);
  }
}

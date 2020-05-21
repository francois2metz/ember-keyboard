import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('test-scenario', function() {
    this.route('mouse-down');
    this.route('touch');
    this.route('keyboard');
    this.route('on-key-helper-examples');
    this.route('on-key-modifier-examples');
    this.route('deprecated/keyboard-combo');
    this.route('deprecated/element-modifiers');
  });

  this.route('mixins');
  this.route('priority');
  this.route('usage');
  this.route('testing');
});

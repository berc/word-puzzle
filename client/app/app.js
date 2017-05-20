import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import Common from './common/common';
import Modules from './modules/modules';
import AppComponent from './app.component';
import 'normalize.css';

var $ = require('jquery');
window.jQuery = $;
require('bootstrap-loader');

angular.module('app', [
    uiRouter,
    uiBootstrap,
    Common,
    Modules
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);

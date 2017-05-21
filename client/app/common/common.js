import angular from 'angular';
import Navbar from './navbar/navbar';
import Config from './config/config.service';
import validWordEntering from './directives/valid-word-entering';

import scoreService from './services/score.service';
import scoreApiService from './services/score.api.service';

let commonModule = angular.module('app.common', [
  Navbar
])

.factory('Config', Config)
.directive('validWordEntering', validWordEntering)

.factory('scoreService', scoreService)
.factory('scoreApiService', scoreApiService)

.name;

export default commonModule;

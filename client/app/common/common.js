import angular from 'angular';
import Navbar from './navbar/navbar';
import Config from './config/config.service';

let commonModule = angular.module('app.common', [
  Navbar
])

.factory('Config', Config)
  
.name;

export default commonModule;

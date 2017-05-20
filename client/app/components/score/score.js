import angular from 'angular';
import uiRouter from 'angular-ui-router';
import scoreComponent from './score.component';

let scoreModule = angular.module('score', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('score', {
      url: '/score',
      component: 'score'
    });
})

.component('score', scoreComponent)
  
.name;

export default scoreModule;

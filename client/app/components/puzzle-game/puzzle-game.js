import angular from 'angular';
import uiRouter from 'angular-ui-router';

import puzzleGameComponent from './puzzle-game.component';
import countdownComponent from './countdown/countdown.component';

let PuzzleGameModule = angular.module('puzzleGame', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('puzzleGame', {
      url: '/',
      component: 'puzzleGame'
    });
})

.component('puzzleGame', puzzleGameComponent)
.component('countdown', countdownComponent)
  
.name;

export default PuzzleGameModule;

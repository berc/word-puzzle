import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from '../../common/common';

import puzzleGameComponent from './puzzle-game.component';
import countdownComponent from './countdown/countdown.component';

import puzzleGameService from './puzzle-game.service';

let PuzzleGameModule = angular.module('puzzleGame', [
  uiRouter,
  Common
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
// .component('puzzleWord', puzzleWordComponent)
.factory('puzzleGameService', puzzleGameService)
  
.name;

export default PuzzleGameModule;

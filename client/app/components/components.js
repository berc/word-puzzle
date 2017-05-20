import angular from 'angular';
import PuzzleGame from './puzzle-game/puzzle-game';
import Score from './score/score';

let componentModule = angular.module('app.components', [
  PuzzleGame,
  Score
])

.name;

export default componentModule;

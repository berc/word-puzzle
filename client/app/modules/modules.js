import angular from 'angular';
import PuzzleGame from './puzzle-game/puzzle-game.module';
import Score from './score/score.module';

let componentModule = angular.module('app.components', [
  PuzzleGame,
  Score
])

.name;

export default componentModule;

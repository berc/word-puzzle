import template from './puzzle-word.html';
import controller from './puzzle-word.controller';
import './puzzle-word.scss';

let puzzleWordComponent = {
  bindings: {
    word: '<',
    handleNextWord: '&'
  },
  template,
  controller
};

export default puzzleWordComponent;

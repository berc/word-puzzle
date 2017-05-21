import template from './result-score.html';
import controller from './result-score.controller';
import './result-score.scss';

let resultScoreComponent = {
  bindings: {
    resultScore: '<'
  },
  template,
  controller
};

export default resultScoreComponent;

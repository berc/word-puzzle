let scoreService = function (scoreApiService) {
  
  function getScores() {
    return scoreApiService.getScores().then(scores => {
      return scores.map(o => { return { score: o.score, name: o.user_name }; });
    });
  }

  function saveScore(newScore) {
    return scoreApiService.createScore(newScore).then(newScore => {
      return { score: newScore.score, name: newScore.user_name };
    });
  }

  return { getScores, saveScore };
};

export default ['scoreApiService', scoreService];

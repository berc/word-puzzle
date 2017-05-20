let puzzleGameService = function (puzzleGameApiService) {

  function getPuzzleWords() {
    return puzzleGameApiService.getPuzzleWords().then(words => {
      return words.map(o => o.word);
    });
  }

  return { getPuzzleWords };
};

export default ['puzzleGameApiService', puzzleGameService];

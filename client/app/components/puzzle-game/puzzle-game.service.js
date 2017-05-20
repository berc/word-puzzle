let PuzzleGameService = function ($http) {
  
  getPuzzleWords = function() {
    return $http.get('https://api.backendless.com/F26DB969-2FED-E1C8-FF69-CF7E952DB900/CEF2FABF-BF30-958A-FF7C-468BBCC77100/data/puzzle_word');
  }

  return { getPuzzleWords };
};

export default ['$http', PuzzleGameService];

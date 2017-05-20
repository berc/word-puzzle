let puzzleGameApiService = function ($http) {
  let API_BASE = 'https://api.backendless.com/F26DB969-2FED-E1C8-FF69-CF7E952DB900/CEF2FABF-BF30-958A-FF7C-468BBCC77100/data';

  function getPuzzleWords() {


    return $http.get(`${API_BASE}/puzzle_word?pageSize=100`)
      .then(o => o.data);
  }

  return { getPuzzleWords };
};

export default ['$http', puzzleGameApiService];

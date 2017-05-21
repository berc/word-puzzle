let scoreApiService = function ($http) {
  let API_BASE = 'https://api.backendless.com/F26DB969-2FED-E1C8-FF69-CF7E952DB900/CEF2FABF-BF30-958A-FF7C-468BBCC77100/data';

  function getScores() {
    return $http.get(`${API_BASE}/user_score?pageSize=100&sortBy=score%20desc`)
      .then(o => o.data);
  }

  function createScore(newScore) {
    return $http.post(`${API_BASE}/user_score`, newScore)
      .then(o => o.data);
  }

  return { getScores, createScore };
};

export default ['$http', scoreApiService];

let puzzleGameService = function (puzzleGameApiService) {
  let allWords = null;
  let notPlayedWords = [];
  let playedWords = [];

  let loadPromise = null;

  function loadPuzzleWords() {
    return puzzleGameApiService.getPuzzleWords().then(words => {
      allWords = words.map(o => o.word);
      notPlayedWords = allWords.slice();
      playedWords = [];
    });
  }

  function startGame() {
    if (!allWords) {
      loadPromise = loadPuzzleWords();
      return loadPromise;
    }
    notPlayedWords = allWords.slice();
    playedWords = [];
    return loadPromise;
  }

  function saveResult() {
    
  }

  function getNextWord() {
    let selectedWord = notPlayedWords.pop();

    let shuffledWord = _shuffleWord(selectedWord);
    while(shuffledWord === selectedWord) {
      shuffledWord = _shuffleWord(selectedWord);
    }
    return {selectedWord, shuffledWord};
  }

  function _shuffleWord(word) {
    let a = word.split(''),
        n = a.length;

    for(let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
  }

  return { startGame, saveResult, getNextWord };
};

export default ['puzzleGameApiService', puzzleGameService];

let puzzleGameService = function (puzzleGameApiService) {
  let allWords = null;
  let notPlayedWords = [];
  let actualScore = 0;

  let loadPromise = null;

  function loadPuzzleWords() {
    return puzzleGameApiService.getPuzzleWords().then(words => {
      allWords = words.map(o => o.word);
      notPlayedWords = allWords.slice();
      actualScore = 0;
    });
  }

  function startGame() {
    if (!allWords) {
      loadPromise = loadPuzzleWords();
      return loadPromise;
    }
    notPlayedWords = allWords.slice();
    actualScore = 0;
    return loadPromise;
  }

  function saveResult(word) {
    let penalty = word.selectedWord.length - word.correctWord.length;
    let maxWordResult = Math.floor(Math.pow(1.95, word.selectedWord.length / 3));
    actualScore += Math.max(maxWordResult - penalty, 0);
    return actualScore;
  }

  function getNextWord() {
    if (notPlayedWords.length === 0) {
      notPlayedWords = allWords.slice();
    }
    let selectedWord = notPlayedWords.pop();

    let shuffledWord = _shuffleWord(selectedWord);
    while(shuffledWord === selectedWord) {
      shuffledWord = _shuffleWord(selectedWord);
    }
    return {selectedWord, shuffledWord, correctWord: ''};
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

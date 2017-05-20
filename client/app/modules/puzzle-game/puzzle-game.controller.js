class puzzleGameController {
  inst = null;
  loading = false;

  constructor(puzzleGameService, Config) {
    this.puzzleGameService = puzzleGameService;
    this.Config = Config;
    this.word = '';
    this.correctWord = '';
  }

  $onInit() {
    this.showFirstWord();
  }

  showFirstWord() {
    this.loading = true;
    this.puzzleGameService.startGame().then(() => {this.word = this.puzzleGameService.getNextWord()})
      .finally(o => {this.loading = false});
  };

  handleNextWord() {
    this.puzzleGameService.saveResult(this.word);
    this.word = this.puzzleGameService.getNextWord();
  }

  $onDestroy() {
  }
}

export default ['puzzleGameService', 'Config', puzzleGameController];

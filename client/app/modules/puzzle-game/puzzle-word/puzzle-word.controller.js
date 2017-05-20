class puzzleWordController {
  inst = null;

  constructor(puzzleGameService, Config) {
    this.puzzleGameService = puzzleGameService;
    this.Config = Config;
    this.word = '';
  }

  $onInit() {
    this.showFirstWord();
  }

  showFirstWord() {
    this.puzzleGameService.getPuzzleWords().then(o => {
      this.word = JSON.stringify(o);
      console.log(this.word);
    })
  };

  $onDestroy() {
  }
}

export default ['puzzleGameService', 'Config', puzzleWordController];

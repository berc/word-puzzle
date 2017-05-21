class puzzleGameController {
  inst = null;
  goListener = null;
  loading = false;
  isInvalidName = true;
  isRunning = false;
  userName = '';
  word = '';
  correctWord = '';
  resultScore = 0;

  constructor($rootScope, puzzleGameService, scoreService, Config) {
    this.$rootScope = $rootScope;
    this.puzzleGameService = puzzleGameService;
    this.scoreService = scoreService;
    this.Config = Config;
  }

  $onInit() {
    this.goListener = this.registerOnGameOver();
  }

  $onDestroy() {
    this.goListener();
  }

  startGame() {
    this.showFirstWord();
  }

  onChangedUserName() {
    this.isInvalidName = !this.userName || this.userName.length < 3;
  }

  showFirstWord() {
    this.loading = true;
    this.puzzleGameService.startGame().then(() => {
      this.word = this.puzzleGameService.getNextWord();
      this.resultScore = 0;
      this.isRunning = true;
      this.$rootScope.$broadcast('startGame');
    }).finally(o => {this.loading = false});
  };

  handleNextWord() {
    this.resultScore = this.puzzleGameService.saveResult(this.word);
    this.word = this.puzzleGameService.getNextWord();
  }

  registerOnGameOver() {
    return this.$rootScope.$on('gameOver', () => {
      this.isRunning = false;
      this.scoreService.saveScore({ score: this.resultScore, 'user_name': this.userName });
    })
  }
}

export default ['$rootScope', 'puzzleGameService', 'scoreService', 'Config', puzzleGameController];

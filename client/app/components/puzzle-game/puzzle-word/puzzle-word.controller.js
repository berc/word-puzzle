class puzzleWordController {
  inst = null;

  constructor(puzzleGameService, Config) {
    this.puzzleGameService = puzzleGameService;
    this.Config = Config;
  }

  $onInit() {
    this.startpuzzleWord();
  }

  startpuzzleWord() {
    this.puzzleWord = this.Config.puzzleWord_SECONDS;
    this.inst = this.$interval(() => {
      this.puzzleWord--;

      if (this.puzzleWord < 0) {
        this.puzzleWord = 'Game over. :)';
        this.$interval.cancel(this.inst);
        this.inst = null;
      }

    }, 1000);
  }

  $onDestroy() {
    if (this.inst) {
      this.$interval.cancel(this.inst);
    }
  }
}

export default ['$interval', 'Config', puzzleWordController];

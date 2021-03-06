class countdownController {
  inst = null;
  sgListener = null;

  constructor($rootScope, $interval, Config) {
    this.$rootScope = $rootScope;
    this.$interval = $interval;
    this.Config = Config;
  }

  $onInit() {
    this.sgListener = this.registerOnStartGame();
  }

  startCountdown() {
    if (this.inst) {
      this.$interval.cancel(this.inst);
    }
    this.countdown = this.Config.COUNTDOWN_SECONDS;

    this.inst = this.$interval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        this.countdown = 'Game over. :)';
        this.$interval.cancel(this.inst);
        this.inst = null;
        this.$rootScope.$broadcast('gameOver');
      }

    }, 1000);
  }

  registerOnStartGame() {
    return this.$rootScope.$on('startGame', () => {
      this.startCountdown();
    })
  }

  $onDestroy() {
    if (this.inst) {
      this.$interval.cancel(this.inst);
    }
    this.sgListener();
  }
}

export default ['$rootScope', '$interval', 'Config', countdownController];

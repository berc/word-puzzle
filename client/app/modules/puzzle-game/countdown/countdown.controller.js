class countdownController {
  inst = null;

  constructor($interval, Config) {
    this.$interval = $interval;
    this.Config = Config;
  }

  $onInit() {
    this.startCountdown();
  }

  startCountdown() {
    this.countdown = this.Config.COUNTDOWN_SECONDS;
    this.inst = this.$interval(() => {
      this.countdown--;

      if (this.countdown < 0) {
        this.countdown = 'Game over. :)';
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

export default ['$interval', 'Config', countdownController];

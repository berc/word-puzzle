class puzzleWordController {

  onNextWordClick() {
    this.handleNextWord({word: this.word});
  }
}

export default ['puzzleGameService', 'Config', puzzleWordController];

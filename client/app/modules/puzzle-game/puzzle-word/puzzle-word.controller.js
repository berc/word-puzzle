class puzzleWordController {

  onKeypress(event) {
    if (!this.word || !this.word.selectedWord) { return; }
    let testedSubWord  = this.word.correctWord + String.fromCharCode(event.keyCode);
    if (this.word.selectedWord.indexOf(testedSubWord) !== 0) {
      event.preventDefault();
    }
  }

  onNextWordClick() {
    this.handleNextWord({word: this.word});
  }
}

export default ['puzzleGameService', 'Config', puzzleWordController];

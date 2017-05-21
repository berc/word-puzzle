class ScoreController {
  constructor(scoreService) {
    this.scoreService = scoreService;
  }

  $onInit() {
    this.loadScoreList();
  }

  loadScoreList() {
    this.scoreService.getScores().then(scores => { this.players = scores })
  }
}

export default ['scoreService', ScoreController];

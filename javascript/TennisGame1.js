var TennisGame1 = function (player1Name, player2Name) {
    this.scores = {
        player1: 0,
        player2: 0
    };
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function (playerName) {
    this.scores[playerName] = this.scores[playerName] + 1;
};

TennisGame1.prototype.getScore = function () {
    var score = "";

    function translateScoreToTennisLanguage(numberOfPoints) {
        var scoreWords = {
            0: 'Love',
            1: 'Fifteen',
            2: 'Thirty',
            3: 'Forty'
        };

        return scoreWords[numberOfPoints];
    }

    function buildScoreString(player1Score, player2Score) {
        var score;
        score = translateScoreToTennisLanguage(player1Score);
        score += "-";
        score += translateScoreToTennisLanguage(player2Score);
        return score;
    }

    function buildScoreStringWhenSameScore(points) {
        var score = "";
        switch (points) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
        return score;
    }

    if (this.scores['player1'] === this.scores['player2']) {
        score = buildScoreStringWhenSameScore(this.scores['player1']);
    } else if (this.scores['player1'] >= 4 || this.scores['player2'] >= 4) {
        var minusResult = this.scores['player1'] - this.scores['player2'];
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        score = buildScoreString(this.scores['player1'], this.scores['player2']);
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}

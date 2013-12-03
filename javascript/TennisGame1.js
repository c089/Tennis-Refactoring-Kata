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

TennisGame1.prototype.aPlayerHasWonTheGame = function () {
    return Math.abs(this.differenceBetweenPlayerScores()) >= 2;
};

TennisGame1.prototype.differenceBetweenPlayerScores = function () {
    return this.scores['player1'] - this.scores['player2'];
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
        var scoresWhenEqual = {
            0: "Love-All",
            1: "Fifteen-All",
            2: "Thirty-All"
        };

        return scoresWhenEqual[points] || "Deuce";
    }

    if (this.scores['player1'] === this.scores['player2']) {
        score = buildScoreStringWhenSameScore(this.scores['player1']);
    } else if (this.scores['player1'] >= 4 || this.scores['player2'] >= 4) {
        var minusResult = this.differenceBetweenPlayerScores(),
            leadingOrWinningPlayer = minusResult > 0 ? "player1": "player2";
        if(this.aPlayerHasWonTheGame()) {
            score = "Win for " + leadingOrWinningPlayer;
        } else {
            score = "Advantage " + leadingOrWinningPlayer;
        }
    } else {
        score = buildScoreString(this.scores['player1'], this.scores['player2']);
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}

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
    var tempScore = 0;
    if (this.scores['player1'] === this.scores['player2']) {
        switch (this.scores['player1']) {
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
    } else if (this.scores['player1'] >= 4 || this.scores['player2'] >= 4) {
        var minusResult = this.scores['player1'] - this.scores['player2'];
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.scores['player1'];
            else {
                score += "-";
                tempScore = this.scores['player2'];
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}

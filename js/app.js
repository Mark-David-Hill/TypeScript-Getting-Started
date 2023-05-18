class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
function startGame() {
    let playerName = getInputValue('playername');
    logplayer(playerName);
    postScore(80, playerName);
    postScore(-5, playerName);
}
function logplayer(name = 'MultiMath Player') {
    console.log(`New game starting for player: ${name}`);
}
function getInputValue(elementID) {
    const inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
function postScore(score, playerName = 'MultiMath Player') {
    let logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    const scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
}
document.getElementById('startGame').addEventListener('click', startGame);
const logMessage = (message) => console.log(message);
function logError(err) {
    console.error(err);
}
const firstPlayer = new Player();
firstPlayer.name = 'mark';
console.log(firstPlayer.formatName());
//# sourceMappingURL=app.js.map
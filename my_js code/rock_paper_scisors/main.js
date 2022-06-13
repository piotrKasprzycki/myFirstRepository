const resultsDisplay = document.querySelector('.results');
const stats = document.querySelector('.stats');
const moreStats = document.querySelector('.moreStats');
const moves = ['rock', 'paper', 'scisors'];

const gameResults = {
    rockWin: 0,
    paperWin: 0,
    scisorsWin: 0,
    win: 0,
    tie: 0,
    loose: 0,
    all: 0,
}

const printResults = () => {
    moreStats.textContent = `you win in ${Math.floor(gameResults.win / gameResults.all * 100)}%, you loose in ${Math.floor(gameResults.loose / gameResults.all * 100)}%, tie in ${Math.floor(gameResults.tie / gameResults.all * 100)}%`;
};

const playerChoice = document.querySelectorAll('.rock, .paper, .scisors');

for (let i = 0; i < playerChoice.length; i++) {
    const keys = Object.keys(gameResults);

    playerChoice[i].addEventListener('click', () => {

        if (document.querySelector('.checkbox').checked) {

            console.log('working');
            const repeatNumber = document.querySelector('.autoInput').value;

            for (let i = 1; i < repeatNumber; i++) {
                playerChoice[1].click();

            }
        }

        gameResults.all++;
        resultsDisplay.textContent = '';
        const random = Math.floor(Math.random() * playerChoice.length);
        if (moves[i] === moves[random]) {
            resultsDisplay.textContent = 'tie';
            gameResults.tie++;
        } else if (moves[i] === 'rock' && moves[random] === 'scisors' || moves[i] === 'paper' && moves[random] === 'rock' || moves[i] === 'scisors' && moves[random] === 'paper') {
            resultsDisplay.textContent = 'you win';
            gameResults[keys[i]]++;
            gameResults.win++;
        } else if (moves[i] === 'rock' && moves[random] === 'paper' || moves[i] === 'paper' && moves[random] === 'scisors' || moves[i] === 'scisors' && moves[random] === 'rock') {
            resultsDisplay.textContent = 'you loose';
            gameResults.loose++;
        }
        printResults();

        resultsDisplay.textContent += ` - computer picked ${moves[random]}`
    })
};





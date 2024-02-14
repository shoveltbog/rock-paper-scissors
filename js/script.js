// branch rps-ui code


// set game variables
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

// generate computers choice 
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

// play a round of the game
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        gameCount++;
        result = `You Draw! ${playerSelection} draws ${computerSelection}`;
    } else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') || (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
        gameCount++;
        computerScore++;
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if ((playerSelection ==='ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')){
        gameCount++;
        playerScore++;
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = "Error, Please enter either Rock, Paper, or Scissors & try again";
    }

    // Update result & scoreboard
    updateResultDisplay(result);
    updateScoreboard();

    // Check if either player or computer has reached 5 points
    if (playerScore === 5) {
        announceWinner("Player");
    } else if (computerScore === 5) {
        announceWinner("Computer");
    }
}
        
// buttons
const buttonContainer = document.querySelector('body');

const rockButton = document.createElement('button');
rockButton.innerText = "ROCK";
buttonContainer.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.innerText = "PAPER";
buttonContainer.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.innerText = "SCISSORS";
buttonContainer.appendChild(scissorsButton);

// create div for displaying results & give id
const resultDiv = document.createElement('div');
resultDiv.id = "resultDiv";
buttonContainer.appendChild(resultDiv);

// create div for displaying scoreboard
const scoreboardDiv = document.createElement('div');
scoreboardDiv.id = "scoreboardDiv";
buttonContainer.appendChild(scoreboardDiv);

// append new result as new child element of the result div
function updateResultDisplay(result) {
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = result;
    resultDiv.appendChild(resultParagraph);
}

// update scoreboard function
function updateScoreboard() {
    const scoreboardContent = `Games Played: ${gameCount}\nPlayers Score: ${playerScore}\nComputers Score: ${computerScore}`;
    scoreboardDiv.textContent = scoreboardContent;
}

// Button event listeners
rockButton.addEventListener('click', () => {
    const playerSelection = "ROCK";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

});

paperButton.addEventListener('click', () => {
    const playerSelection = "PAPER";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener('click', () => {
    const playerSelection = "SCISSORS";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

// Function to announce winner & end game
function announceWinner(winner) {
    const winnerMessage = `${winner} wins the game!`;
    const winnerParagrapgh = document.createElement('p');
    winnerParagrapgh.textContent = winnerMessage;
    resultDiv.appendChild(winnerParagrapgh);

    // Disable buttons
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}


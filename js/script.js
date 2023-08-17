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
    
    if (playerSelection === computerSelection) {
        gameCount++;
        console.log('Games Played: ' + gameCount + '\n' + 'Players Score: ' + playerScore + '\n' + 'Computers Score: ' + computerScore);
            return `You Draw! ${playerSelection} draws ${computerSelection}`;

      } else if ((playerSelection === 'ROCK' && computerSelection === 'PAPER') || (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')) {
        gameCount++;
        computerScore++;
        console.log('Games Played: ' + gameCount + '\n' + 'Players Score: ' + playerScore + '\n' + 'Computers Score: ' + computerScore);
            return  `You Lose! ${computerSelection} beats ${playerSelection}`;

      } else if ((playerSelection ==='ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')){
        gameCount++;
        playerScore++;
        console.log('Games Played: ' + gameCount + '\n' + 'Players Score: ' + playerScore + '\n' + 'Computers Score: ' + computerScore);
            return  `You Win! ${playerSelection} beats ${computerSelection}`;

      } else {
            return ("Error, Please refresh the page & try again");
      }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("ROCK, PAPER or SCISSORS?: ").toUpperCase();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
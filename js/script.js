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
            return ("Error, Please enter either Rock, Paper or Scissors & try again");
      }
}

// Play 5 rounds of the game
// function game() {
//     for (gameCount; gameCount < 5;) {
//         playerSelection = prompt("ROCK, PAPER or SCISSORS?: ").toUpperCase();
//         computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// buttons
const buttonContainer = document.querySelector('body');

const rockButton = document.createElement('button');
rockButton.innerText = "ROCK";
buttonContainer.appendChild(rockButton);

rockButton.addEventListener('click', () => {
    const playerSelection = "ROCK";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection)); 
});

const paperButton = document.createElement('button');
paperButton.innerText = "PAPER";
buttonContainer.appendChild(paperButton);

paperButton.addEventListener('click', () => {
    const playerSelection = "PAPER";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection)); 
});

const scissorsButton = document.createElement('button');
scissorsButton.innerText = "SCISSORS";
buttonContainer.appendChild(scissorsButton);

scissorsButton.addEventListener('click', () => {
    const playerSelection = "SCISSORS";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection)); 
});

// game();
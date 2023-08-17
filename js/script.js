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


function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
}

getComputerChoice()
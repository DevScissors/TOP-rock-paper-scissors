let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let randomChoice = '';
    if (randomNum === 0) {
        randomChoice = "rock";
    } else if (randomNum === 1) {
        randomChoice = "paper";
    } else if (randomNum === 2) {
        randomChoice = "scissors";
    }
    console.log(randomChoice);
    return randomChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper, or scissors.");
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + " and has won " + humanScore + " times!");
    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice + " and has won " + computerScore + " times!");
    }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}
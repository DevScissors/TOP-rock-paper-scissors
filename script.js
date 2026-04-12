let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoice = '';
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerChoice = "rock";
    }
    else if (randomNum === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    const humanChoice = window.prompt("Choose, rock, paper, or scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        console.log("It's a tie! No one wins.");
        return console.log("The score is now \n Human: " + humanScore + " \n Computer: " + computerScore);
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors" ||
        humanChoice.toLowerCase() === "paper" && computerChoice === "rock" ||
        humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(humanChoice + " beats " + computerChoice + " so you win!");
        return console.log("The score is now \n Human: " + humanScore + " \n Computer: " + computerScore);
    } else {
        computerScore++;
        console.log(computerChoice + " beats " + humanChoice + " you lose!");
        return console.log("The score is now \n Human: " + humanScore + " \n Computer: " + computerScore);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("The final score is \n Human: " + humanScore + " \n Computer: " + computerScore);
    if (humanScore === computerScore) {
        return console.log("It's a tie, no one wins!");
    } else if (humanScore > computerScore) {
        return console.log("You win!");
    } else {
        return console.log("The computer beat you, you lost!");
    }

}

playGame();
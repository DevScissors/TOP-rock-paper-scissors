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

// function getHumanChoice() {
//     const humanChoice = window.prompt("Choose, rock, paper, or scissors");
//     return humanChoice;
// }



function playRound(humanChoice, computerChoice) {
    const divResults = document.querySelector(".results");
    const resultParaTie = document.createElement("p");
    const resultParaWin = document.createElement("p");
    const resultParaLoss = document.createElement("p");

    if (humanChoice.toLowerCase() === computerChoice) {
        resultParaTie.textContent += "It's a tie! No one wins.\n"
            + "The score is now \nHuman: " + humanScore + " \nComputer: " + computerScore + "\n";
        divResults.appendChild(resultParaTie);
    }
    else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors" ||
        humanChoice.toLowerCase() === "paper" && computerChoice === "rock" ||
        humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultParaWin.textContent += humanChoice + " beats " + computerChoice + " so you win!\n"
            + "The score is now \n Human: " + humanScore + " \n Computer: " + computerScore + "\n";
        divResults.appendChild(resultParaWin);
    } else {
        computerScore++;
        resultParaLoss.textContent += computerChoice + " beats " + humanChoice + " you lose!\n"
            + "The score is now \n Human: " + humanScore + " \n Computer: " + computerScore + "\n";
        divResults.appendChild(resultParaLoss);
    }
}

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");

rockButton.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperButton.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound("scissors", getComputerChoice()));


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
//     console.log("The final score is \n Human: " + humanScore + " \n Computer: " + computerScore);
//     if (humanScore === computerScore) {
//         return console.log("It's a tie, no one wins!");
//     } else if (humanScore > computerScore) {
//         return console.log("You win!");
//     } else {
//         return console.log("The computer beat you, you lost!");
//     }

// }

// playGame();
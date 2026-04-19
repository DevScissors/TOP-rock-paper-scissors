let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const roundCountInput = document.querySelector("input");

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");


rockButton.disabled = true;
paperButton.disabled = true;
scissorsButton.disabled = true;

const playButton = document.querySelector(".playButton");
playButton.addEventListener('click', () => {
    rockButton.classList.add('animate-fade-in');
    paperButton.classList.add('animate-fade-in');
    scissorsButton.classList.add('animate-fade-in');
    startGame()
});

function startGame() {
    if (roundCountInput.value !== '') {
        rockButton.disabled = false;
        paperButton.disabled = false;
        scissorsButton.disabled = false;
    }
}

rockButton.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperButton.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound("scissors", getComputerChoice()));



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

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice) {
        return 'tie';
    } else if (
        (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
        (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
        (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
    ) {
        return 'human';
    } else {
        return 'computer';
    }
}

function updateScores(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function displayRoundResult(roundCount, humanChoice, computerChoice, winner, humanScore, computerScore) {
    const divResults = document.querySelector(".results");
    const resultPara = document.createElement("p");

    let resultText = "Round: " + roundCount + "\n";
    if (winner === 'tie') {
        resultText += "It's a tie! No one wins.\n";
    } else if (winner === 'human') {
        resultText += humanChoice + " beats " + computerChoice + " so you win!\n";
    } else {
        resultText += computerChoice + " beats " + humanChoice + " you lose!\n";
    }
    resultText += "The score is now \nHuman: " + humanScore + " \nComputer: " + computerScore + "\n";

    resultPara.textContent = resultText;
    divResults.appendChild(resultPara);
}

function checkGameOver(roundCount, roundValue) {
    if (roundCount == roundValue) {
        const divResults = document.querySelector(".results");
        const gameOverPara = document.createElement("p");
        divResults.appendChild(gameOverPara);
        gameOverPara.textContent += "GAME OVER! \n" +
            (computerScore == humanScore ?
                "You tied! Nobody wins!"
                : computerScore < humanScore
                    ? "You win! Congrats!"
                    : "You lose! The computer beat you!");
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

function playRound(humanChoice, computerChoice) {
    roundCount++;
    const roundValue = parseInt(roundCountInput.value);

    const winner = determineWinner(humanChoice, computerChoice);
    updateScores(winner);
    displayRoundResult(roundCount, humanChoice, computerChoice, winner, humanScore, computerScore);
    checkGameOver(roundCount, roundValue);
}


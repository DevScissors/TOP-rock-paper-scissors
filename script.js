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
    if (roundCountInput.value !== '') {
        roundCount = 0;
        if (divResultsContainer.parentElement) {
            divResultsContainer.remove();
        }
        rockButton.classList.add('animate-fade-in');
        paperButton.classList.add('animate-fade-in');
        scissorsButton.classList.add('animate-fade-in');
        roundCountInput.disabled = true;
        playButton.disabled = true;
        startGame()
    }
    else {
        alert("You have to insert the number of rounds first!");
    }
});

function startGame() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

rockButton.addEventListener('click', () => playRound("Rock", getComputerChoice()));
paperButton.addEventListener('click', () => playRound("Paper", getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound("Scissors", getComputerChoice()));

const pHumanScore = document.querySelector(".human-score");
pHumanScore.textContent = humanScore;
const pComputerScore = document.querySelector(".computer-score");
pComputerScore.textContent = computerScore;



function getComputerChoice() {
    let computerChoice = '';
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        computerChoice = "Rock";
    }
    else if (randomNum === 1) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'tie';
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return 'human';
    } else {
        return 'computer';
    }
}

function updateScores(winner) {
    if (winner === 'human') {
        humanScore++;
        pHumanScore.textContent = humanScore;
    } else if (winner === 'computer') {
        computerScore++;
        pComputerScore.textContent = computerScore;
    }
}

const divGameBoard = document.querySelector(".game-board");
const divRoundNumber = document.createElement("div");
const divRoundResult = document.createElement("div");
const divResultsContainer = document.createElement("div");

function displayRoundResult(roundCount, humanChoice, computerChoice, winner) {
    divResultsContainer.classList.add("results-container");
    divRoundNumber.classList.add("round-count");
    divRoundResult.classList.add("round-result");


    divGameBoard.appendChild(divResultsContainer);
    divResultsContainer.appendChild(divRoundNumber);
    divResultsContainer.appendChild(divRoundResult);

    divRoundNumber.textContent = "Round: " + roundCount + "\n";
    if (winner === 'tie') {
        divRoundResult.textContent = "It's a tie! No one wins.\n";
    } else if (winner === 'human') {
        divRoundResult.textContent = humanChoice + " beats " + computerChoice + " so you win!\n";
    } else {
        divRoundResult.textContent = computerChoice + " beats " + humanChoice + " you lose!\n";
    }
}

function checkGameOver(roundCount, roundValue) {
    if (roundCount == roundValue) {
        if (computerScore == humanScore) {
            divRoundResult.textContent = "GAME OVER! \n" + "You tied! Nobody wins!";
        } else if (humanScore > computerScore) {
            divRoundResult.textContent = "GAME OVER! \n" + "You win! Congrats!";
        } else {
            divRoundResult.textContent = "GAME OVER! \n" + "You lose! The computer beat you!";
        }

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        playButton.disabled = true;

        const playAgainButtonContainer = document.createElement("div");
        playAgainButtonContainer.classList.add("play-again-button-container");
        const playAgainButton = document.createElement("button");
        playAgainButton.classList.add("play-again-button");
        playAgainButton.textContent = "Play Again?";
        divGameBoard.appendChild(playAgainButtonContainer);
        playAgainButtonContainer.appendChild(playAgainButton);

        playAgainButton.addEventListener('click', () => {
            roundCountInput.disabled = false;
            playButton.disabled = false;
            roundCountInput.value = '';
            humanScore = 0;
            computerScore = 0;
            roundCount = 0;
            pHumanScore.textContent = humanScore;
            pComputerScore.textContent = computerScore;
            if (divResultsContainer.parentElement) {
                divResultsContainer.remove();
            }
            playAgainButtonContainer.remove();
        })
    }
}

function playRound(humanChoice, computerChoice) {
    roundCount++;
    const roundValue = parseInt(roundCountInput.value);

    const winner = determineWinner(humanChoice, computerChoice);
    updateScores(winner);
    displayRoundResult(roundCount, humanChoice, computerChoice, winner);
    checkGameOver(roundCount, roundValue);
}


/************************
* This is a simple rock, paper, scissors game
* Author: MisterWaner
* Date: 05/01/2024
*************************/

/******* Constant and variables ********/
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

/******* Main program ********/

//Function to play the game
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Égalité !";
    } else {
        switch (playerChoice) {
            case "rock":
                result = computerChoice === "scissors" ? "Gagné !" : "Perdu !";
                break;
            case "paper":
                result = computerChoice === "rock" ? "Gagné !" : "Perdu !";
                break;
            case "scissors":
                result = computerChoice === "paper" ? "Gagné !" : "Perdu !";
                break;
        }
    }

    playerDisplay.textContent = `Joueur: ${playerChoice}`;
    computerDisplay.textContent = `Ordinateur: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("blueText", "redText");

    switch (result) {
        case "Gagné !":
            resultDisplay.classList.add("blueText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Perdu !":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

//Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    playerDisplay.textContent = "Joueur: ";
    computerDisplay.textContent = "Ordinateur: ";
    resultDisplay.textContent = ""
    resultDisplay.classList.remove("blueText", "redText");
}

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const resultText = document.getElementById("result-text");
const scoreText = document.getElementById("score-text");

rockButton.addEventListener("click", () => {
     rollItem("Rock");
});
paperButton.addEventListener("click", () => {
     rollItem("Paper");
});
scissorsButton.addEventListener("click", () => {
     rollItem("Scissors");
});

let score = 0;
let computerScore = 0;

scoreText.textContent = ``;
resultText.textContent = ``;

function rollItem(choice) {
     let randomNum = Math.floor(Math.random() * 3) // 0, 1, 2;
     let computerChoice;
     switch (randomNum) {
          case 0:
               computerChoice = "Rock";
               break;
          case 1:
               computerChoice = "Paper";
               break;
          case 2:
               computerChoice = "Scissors"
               break;
          default:
               computerChoice = "Rock";
               break;
     }
     let result;
     if (computerChoice == choice) {
          result = "Tie"
     }

     if (computerChoice == "Paper" && choice == "Scissors") {
          result = "Win";
     } else if (computerChoice == "Paper" && choice == "Rock") {
          result = "Lose";
     } else if (computerChoice == "Scissors" && choice == "Paper") {
          result = "Lose";
     } else if (computerChoice == "Scissors" && choice == "Rock") {
          result = "Win"
     } else if (computerChoice == "Rock" && choice == "Scissors") {
          result = "Lose";
     } else if (computerChoice == "Rock" && choice == "Paper") {
          result = "Win"
     }

     if (result == "Win") {
          score++;
          scoreText.textContent = `Score: ${score}, Computer Score: ${computerScore}`;
          resultText.textContent = `You won. Computer Lost ${choice}/${computerChoice}`;
     } else {
          computerScore++;
          scoreText.textContent = `Score: ${score}, Computer Score: ${computerScore}`;
          resultText.textContent = `You lost. Computer won ${choice}/${computerChoice}`;
     }
}
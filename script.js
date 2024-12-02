console.log("hello world");

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const resultDiv = document.querySelector("div");
const p = document.createElement("p");

const getComputerChoice = () => {
  const rpsChoices = ["rock", "paper", "scissors"];
  const compRandomChoice = Math.floor(Math.random() * rpsChoices.length);
  // returns rock, paper, scissors instead of 0,1,2
  const computerChoice = rpsChoices[compRandomChoice];
  return computerChoice;
  console.log(computerChoice);
};

// getComputerChoice()

const getHumanChoice = () => {
  let humanChoice = prompt(
    "Choose between Rock, Paper, or Scissors"
  ).toLowerCase();
  // returns one of the valid choices (rock, paper, or scissors)
  if (humanChoice === "rock") {
    return humanChoice;
    console.log(humanChoice);
    return humanChoice;
  } else if (humanChoice === "paper") {
    return humanChoice;
    console.log(humanChoice);
  } else if (humanChoice === "scissors") {
    return humanChoice;
    console.log(humanChoice);
  } else {
    return "Please enter Rock, Paper, or Scissors";
    console.log("Please enter Rock, Paper, or Scissors");
  }
};

// getHumanChoice()

let humanScore = 0;
let computerScore = 0;

// displays score and result in HTML document
const displayResult = (message) => {
  
  p.innerText = message;
  resultDiv.appendChild(p);
};

const playRound = (humanChoice, computerChoice) => {
  console.log("1 ", humanChoice, "2 ", computerChoice);

  let message = "";
  // win, humanScore++ adds to humanScore
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    // charAt() extracts 1st letter of humanChoice, capitalizes using toUpperCase() and slice(1) extracts substring from humanChoice from index 1 to the end
    message = `You win! You chose ${humanChoice} and Computer chose ${computerChoice}. ${humanChoice.charAt(0).toUpperCase()}${humanChoice.slice(1)} beats ${computerChoice}. Player score: ${humanScore}. Computer score: ${computerScore}`;
    // console.log(
    //   `You win! Computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}. Player score: ${humanScore}. Computer score: ${computerScore}`
    // );
    // lose, computerScore++ adds to compScore
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore++;
    // charAt() extracts 1st letter of computerChoice, capitalizes using toUpperCase() and slice(1) extracts substring from computerChoice from index 1 to the end
    message = `You lose! You chose ${humanChoice} and Computer chose ${computerChoice}. ${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(1)} beats ${humanChoice}. Player score: ${humanScore}. Computer score: ${computerScore}`;
    // console.log(
    //   `You lose! Computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice}. Player score: ${humanScore}. Computer score: ${computerScore}`
    // );
    // tie, no score if tied
  } else if (humanChoice === computerChoice) {
    message = `You tied! You both chose ${humanChoice}. Player score: ${humanScore}. Computer score: ${computerScore}`;
    // console.log(
    //   `You tied! You both chose ${humanChoice}. Player score: ${humanScore}. Computer score: ${computerScore}`
    // );
  } else {
    message = "Please enter Rock, Paper, or Scissors";
    // console.log("Please enter Rock, Paper, or Scissors");
  }
  displayResult(message);
};

// displays final result when either score is === 5
const finalResult = () => {
  const finalMessage = document.createElement("h2");
  const h2 = document.createElement("h2");

  if (humanScore === 5 && computerScore < 5) {
    finalMessage.innerText = `Final score is Player: ${humanScore} to Computer: ${computerScore}. Good job!`;
  } else if (computerScore === 5 && humanScore < 5) {
    finalMessage.innerText = `Final score is Player: ${humanScore} to Computer: ${computerScore}. Better luck next time.`;
  } else if (humanScore === 5 && computerScore === 5) {
    finalMessage.innerText = `Final score is Player: ${humanScore} to Computer: ${computerScore}. You tied with the computer!`;
  }

  if (humanScore === 5 || computerScore === 5) {
    rockBtn.setAttribute("disabled", true);
    paperBtn.setAttribute("disabled", true);
    scissorsBtn.setAttribute("disabled", true);

    h2.innerText = "Reload broswer to play again";
  }

  resultDiv.appendChild(finalMessage);
  resultDiv.appendChild(h2);
};

rockBtn.addEventListener("click", () => {
  // call getComputerChoice function & call player selection (rock button clicked so humanChoice = 'rock')
  const computerChoice = getComputerChoice();
  const humanChoice = "rock";
  playRound(humanChoice, computerChoice);
  finalResult();
});

paperBtn.addEventListener("click", () => {
  // call getComputerChoice function & call player selection (paper button clicked so humanChoice = 'paper')
  const computerChoice = getComputerChoice();
  const humanChoice = "paper";
  playRound(humanChoice, computerChoice);
  finalResult();
});

scissorsBtn.addEventListener("click", () => {
  // call getComputerChoice function & call player selection (scissors button clicked so humanChoice = 'scissors')
  const computerChoice = getComputerChoice();
  const humanChoice = "scissors";
  playRound(humanChoice, computerChoice);
  finalResult();
});

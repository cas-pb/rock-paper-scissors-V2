console.log("hello world");

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

const playRound = (humanChoice, computerChoice) => {
  // win, humanScore++ adds to humanScore
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `You win! Computer chose ${computerChoice}. ${humanChoice} beats ${computerChoice}. Player score: ${humanScore}. Computer score: ${computerScore}`
    );
    // lose, computerScore++ adds to compScore
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore++;
    console.log(
      `You lose! Computer chose ${computerChoice}. ${computerChoice} beats ${humanChoice}. Player score: ${humanScore}. Computer score: ${computerScore}`
    );
    // tie, no score if tied
  } else if (humanChoice === computerChoice) {
    console.log(
      `You tied! You both chose ${humanChoice}. Player score: ${humanScore}. Computer score: ${computerScore}`
    );
  } else {
    alert("Please enter Rock, Paper, or Scissors");
  }
};

const playGame = () => {
  // loops the game for 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  // tallies final score
  if (humanScore > computerScore) {
    console.log(
      `Final score is Player: ${humanScore} to Computer ${computerScore}. Good job!`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `Final score is Player: ${humanScore} to Computer ${computerScore}. Better luck next time.`
    );
  } else {
    console.log(
      `Final score is Player: ${humanScore} to Computer ${computerScore}. You tied with the computer!`
    );
  }
};

playGame();

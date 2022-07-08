//Get the user's choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      console.log("Error!");
    }
  };
  
  //Get the computer's choice
  const getComputerChoice = () => {
    Math.floor(Math.random() * 3);
    switch (0) {
      case 1:
        return "rock";
        break;
      case 2:
        return "paper";
        break;
      default:
        return "scissor";
        break;
    }
  };
  console.log(getComputerChoice());
  //Compare the two choices and determine a winner
  const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb"){
    return 'The user wins no matter what';
  }
  if (userChoice === computerChoice) {
      return "It is a tie";
    }
  
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissor") {
      return "The computer won";
    } else {
      return "You won";
    }
  }
  if (userChoice === "scissor") {
    if (computerChoice === "rock") {
      return "The computer won";
    } else {
      return "You won";
    }
  }
  };
  console.log(determineWinner("scissor", "rock"));
  
  //Start the program and display the results
  const playGame = () => {
     const userChoice = getUserChoice('bomb');
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw:' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
  };
   
  playGame();
  
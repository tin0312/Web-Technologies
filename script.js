let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10); // generate number from 0 - 9 to the large nearest number
};
const compareGuesses = (user, computer, secret) => {
    const diff1 = getAbsoluteDistance(secret - user); 
    const diff2 = getAbsoluteDistance(secret - computer);alertMessage(user);
    return diff1 <= diff2;
  };
const updateScore = (winner) => {
    if (winner === "human") {
      humanScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
  };
const advanceRound = () => currentRoundNumber++;// Math.abs() is a method to get the absolute value
const getAbsoluteDistance  = (a1, a2) => {
    return (Math.abs((a1-a2)));
}
const alertMessage = (user) => {
    if(user < 0 || user >9){
        alert('Guess must be between 0 and 9!');
    }
};


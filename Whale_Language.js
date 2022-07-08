let input = "i love you";
const vowels = ["a", "e", "i", "o", "u"];
// To store vowels from input string
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  //indexing through input to check for e and add it to resultArray
  if (input[i] === "e") {
    resultArray.push(input[i]);}
  // indexing through inout to check for u and add it to resultArray
  if (input[i] === "u") {
    resultArray.push(input[i]);}
    for (let j = 0; j < vowels.length; j++) {
      // indexing through the 2 lists to find common items then add them to resultArray
      if (input[i] === vowels[j]) {
        resultArray.push(input[i]);
        console.log(resultArray);
      }
    }
}
console.log(resultArray);
// to join all string to a sentence to upper case letters
let resultString = resultArray.join(' ').toUpperCase()
console.log(resultString);
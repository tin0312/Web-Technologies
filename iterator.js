const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
// forEach iterator is being used to iterate through the array and append each one with the output string 
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];
// map iterator is being used to iterate through the array and square them up one by one
const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

///////
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
// filter iterator is being used to iterate through the array to find the number values
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//////////
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
// findIndex method is being used to find location of items the  the array
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

console.log(foundAnimal);

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

console.log(startsWithS);


/////////
// the accomulator start w the 1st element, the current start w the second one then they add up the sum , 2 arguments for reduce method , one is callback fucntion that has 2 parameters , one is an interger 
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);


///

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below
// some method is to test wether at least 1 element in the array passed the condition, then it will return true and find the element that meet the requirement.
console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
  
});




// Make sure to uncomment the code below and fix the incorrect code before running it
// the every method is to test if all elements in the array meet the requirements and iit will return a boleen values
 console.log(interestingWords.every((word) => { return word.length > 5 } ));
 console.log(interestingWords)

 ///
 const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);





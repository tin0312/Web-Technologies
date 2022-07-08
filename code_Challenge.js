// Create a function that takes an argument as an array and return them in reversed order 
// reverse the order of the array by using backward loopback and push method
const reversedArray = arr=> {
    let reversed = [];
    for (let i = arr.length-1; i >= 0 ; i--){
    reversed.push(arr[i]);
    
    }
    return reversed;
  };
  // using unshift method 
  const reversedArray = (arr) => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}
// As a function Declaration 
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
    
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)) 
  // Should print ['This', 'will', 'all', 'make', 'sense.'];
  
  ///

  // Write your code here:
const greetAliens = (arr) => {
    let arrayString = [''];
    for(let i = 0 ; i < arr.length ; i++){
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
    };
   
  };

 // Write a function that take a string and return a new string with a prepended 'baby'

  // Write your code here:
const convertToBaby = (arr) => {
    const babyArray = []; // create an array w const 
    for(let i = 0 ; i < arr.length ; i++){ // loop the array with for loop 
      babyArray.push('baby ' + arr[i]) // push all elements iterated to the just created array 
    };
    return babyArray;
  
  }
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals));


/// Create a function that return a new array that calculate the smallest power of two which is greater than or equal to the current element 
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
           let j = 1;
            while (j < number) {
                  j = j * 2;
                 
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

/// Using forEach function to iterate through the array an return a new array 

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Checkpoint 1 solutions:
const declineEverything = arr => {
  arr.forEach(politelyDecline)
}

/*
// As a function declaration:
function declineEverything(arr) {
      arr.forEach(politelyDecline)
}
*/


// Checkpoint 2 solutions:
// Using an anonymous function and string interpolation:
const acceptEverything = arr => {
  arr.forEach(e => {
    console.log(`Ok, I guess I will eat some ${e}.`)
  })
}

/*
// Using a named function and string concatenation:
const grudginglyAccept = veg => {
      console.log('Ok, I guess I will eat some ' + veg + '.');
}
const acceptEverything = arr => {
      arr.forEach(grudginglyAccept)
}

// Using a loop:
const acceptEverything = arr => {
 for(let i = 0; i<arr.length; i++){
    console.log(`Ok, I guess I will eat some ${arr[i]}.`)
 }
}
*/

// Using map method to iterate through the array then return a new array with all squre numbers 
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = arr => arr.map(toSquare);

// Using map method to to take an array then return a new array with all upper case letters

const shoutGreetings = arr =>
  arr.map(word => word.toUpperCase());


// Create an array then call the original function with the declared function to map all the elements in the array to upper case letters.
const aQuote = ['my', 'name', 'is', 'justin'];
console.log(shoutGreetings(aQuote));

// Using sort method to arrange the elements in the array in the correct order

// Write your code here:
const sortYears = arr => arr.sort((year1,year2) => year2- year1) // smaller to bigger year values

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))


// using filter & includes methods to find the common elements of the 2 arrays 

const justCoolStuff = (arr1, arr2) =>
  arr1.filter(item => arr2.includes(item));// filter arr1 only the items that arr2 has 

// the consition above states that , we are filtering all items that arr2 includes so that arr1 & arr2 shared certain items
// arr1
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
// arr2
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

/// Declare a function that take an array of objects and check whether or not the entire items in the array has plant base 

// Write your code here:
const isTheDinnerVegan = arr => arr.every(item => item.source === 'plant')

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

// Declare a function that take an array of objects then return in ascending order based on the key-pair value of the object array 

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
const sortSpeciesByTeeth = arr => arr.sort((obj1, obj2) => obj1.numTeeth > obj2.numTeeth)

console.log(sortSpeciesByTeeth(speciesArray))


// Declare a function that take an array and find the index of the item which is equal to a certain string, if the string neeeded is found then return the index of that item otherwise return -1 

const findMyKeys = arr => arr.findIndex(item => item === 'keys');

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

// Refresh getters & setters method 

const dogFactory = (name, breed, weight) => {
    return {
        _name : name,
        _breed : breed,
        _weight : weight,
        get name() {
          return this._name;
        },
        get breed() {
          return this._breed;
        },
        get weight() {
          return this._weight;
        },
        set name(newName) {
          this._name = newName;
        },
        set breed(newBreed) {
          this._breed =  newBreed;
        },
        set weight(newWeight) {
          this._weight = newWeight;
        },
        bark() {
          return 'ruff! ruff!';
        },
        eatTooManyTreats() {
          this._weight++;
        }
    };
  }


  
  
  
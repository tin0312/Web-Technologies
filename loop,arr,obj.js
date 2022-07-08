// Write function that take a number and return the factorial of that number
const factorial = (num) => {
    if(num > 0 && num === 1){
      return 1;
    } else if(num > 0){
      return num * factorial(num - 1);
    }
  
  };
  console.log(factorial(3));

  // Search for the occurences of a letter in a string and return the length between the 2 letters

  // Write function below
const subLength = (str, char) => {
    let charCount = 0;
    let len = -1;
    
    for (let i=0; i<str.length; i++) { // iterate through the array 
      if (str[i] == char) { // check if the letter is at that position
        charCount++;
        if (charCount > 2) {
          return 0;
        }
        if (len == -1) {
          len = i;
        } else {
          len = i - len + 1
        }
      }
    }
    if (charCount < 2) {
      return 0;
    }
  
    return len;
  };
  console.log(subLength('computation', 'o'));

  // write a function that take an array of obj literals and return a string out of it with comma to separate and and key word to separate for the last 2 items

const groceries = list => {
    let listString = ''
  
    for (let i=0; i<list.length; i++) {
      listString += list[i].item;
      if (i < list.length - 2) {
        listString += ', ';
      } else if (i == list.length - 2){
        listString += ' and ';
      }
    }
    
    return listString;
  }
  console.log(groceries([{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]));

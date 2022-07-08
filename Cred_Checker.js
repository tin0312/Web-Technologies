// The whole concept to check credit card validation is Luhn algorithmn which check from the farthest right , the check digit is not double, the rest is , if after doubling, the value is greater than 9 then substract 9 with that value.Summ all values up, valid digits would have the remainder of 0 of sum
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
const invalidBatch = [invalid1, invalid2, invalid3, invalid4, invalid5];
const validateCred = arr => { 
    let total = 0;// set total to 0
    // using backward for loop to iterate the digit array from the right to left 
    for(let i = arr.length - 1; i >= 0 ; i--){
        let currValue = arr[i];// assign current value as iterating 
        if((arr.length - 1 - i) % 2 === 1){ // check if the first digit from the right is odd or even, if odd then double , if even then not double aka ommit that digit
            currValue*= 2;
        };
            if(currValue > 9){
                currValue-= 9;
            };
    total+=currValue;// add values as iterating to the total    
    }
    return total % 10 === 0; // return only total that has the reminder of 0 which indicates the valid credit card numbers
}
//console.log(validateCred(invalid2));

function findInvalidCards(nestedArr) {
    let invalidNestedArr = [];// Declare an array to keep track of invalid digits
    nestedArr.forEach((arr) => { // Loop through the nested array and use the validateCred() function that you’ve created before to check if the number is valid
      if(validateCred(arr)) {
        console.log(arr);
        invalidNestedArr.push(arr);
      }
});
}
//console.log(findInvalidCards(invalid1));
function idInvalidCardCompanies(invalidNestedArr) {
    let companies = [];
    invalidNestedArr.forEach((arr) => {
      switch(arr[0]) {
        case 3:
          companies.push('Amex');
          break;
        case 4:
          companies.push('Visa');
          break;
        case 5:
          companies.push('Mastercard');
          break;
        case 6:
          companies.push('Discover');
          break;
        default:
          companies.push('Company not found');
          break;
      }
    });
    return companies;
    return companies.filter((value, index) => {
      return companies.indexOf(value) === index;
    });
  }
//console.log(idInvalidCardCompanies(invalidBatch));

//Create a function that accepts an array of string and converts it into an array of numbers like the initially provided arrays

let valid6 = [];
const inputStringToArr = str => {
    for(let i=0;i<str.length;i++){
       let a = parseInt(str[i],10);
      valid6.push(a);
    }
    return valid6;
}
console.log(inputStringToArr("4556206302320585580"));


//Create a function that will convert invalid numbers into valid numbers.
//Invalidnumber : total % 10 !=== 0 ; Validnumber: total % 10 === 0
const convInvToVal = (summ,array) => {
  
    summ = 10 - (summ%10);
    if(summ===10) { array[array.length-1] = 0;
    
    } else {
        array[array.length-1] = summ;
       
}
}
console.log(100,)

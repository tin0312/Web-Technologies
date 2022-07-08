let cupsOfSugarNeeded = 2;
let cupsAdded = 0;
do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

// log array elements to console by indexing through an array 
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for(let i = 0; i < rapperArray.length; i++){
    if(i > 6 ){
      break;
    }
    console.log(rapperArray[i])
  }
  console.log("And if you don't know, now you know.");
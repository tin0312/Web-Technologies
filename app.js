// nested for loop
// Write your code below
//This js code provides a for loop + if statement to iterare index through the 2 lists to find indexes that are the same then push those common indexes to mutualFollowers with bobs indexes
let bobsFollowers = ["a", "b", "c", "d"];
let tinasFollowers = ["a", "b", "e"];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
      if(bobsFollowers[i] === tinasFollowers[j]){
          mutualFollowers.push(bobsFollowers[i])
      }
  }
  
}
console.log(mutualFollowers)
    

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a glorious 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' '); // the elements would be separate by ' '
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
//console.log(storyWords);
let count = 0;
storyWords.forEach((word) => {
  // each time of iteration,increment count by one 
  count++;
  
});
// To see how many words that are printing to the array 

console.log(count); 
// filter the unnessary word and return the array with out that unnessary word
storyWords = storyWords.filter((word) =>{
    return word !== unnecessaryWord;
  
});
console.log(storyWords);

// map iterator method to find the misspelled word then replace them with beautiful 
storyWords = storyWords.map((word) => {
  if(word === misspelledWord){
    return 'beautiful';
  } else {
    return word;
  }
});
console.log(storyWords);
// use findIndex iterator method to find index if the badword variable declared initially 
let badWordIndex = storyWords.findIndex((word) =>{
  if(word === badWord){
    return word;
  }
});
console.log(badWordIndex);
storyWords[78] = 'really' // once we find the index 78 of the bad word then replace them with really 
// use every iterator method to check if every element in the array has characters that are smaller than 10 , if yes return true otherwise return false
let lengthCheck = storyWords.every((word) => {
  return word.length < 10
})
console.log(lengthCheck);
// use forEach method to check if at least one element in the array is greater than 10 than log it into the console
storyWords.forEach((word) => {
  return word.length > 10 && console.log(word)
});

console.log(storyWords.join(' '));
const animal = 'cat'; 
 
for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
}
//the first for loop will iterate 3 times each time return a letter of 'cat' array 
//at the same time the nested for loop repeats 3 times from 1 to 3 
// so the out put will go in pattern : c 1 2 3 , a 1 2 3 , t 1 2 3 
const addTwo = num => {
    return num + 2;
  }
  // to check the work of addTwo function
  const checkConsistentOutput = (func, val) => {
    //store the sum of val and 2
    let checkA = val + 2; // now, if the value of 2 is altered then checkA !=== checkB
    // store invocation of func callback with val as an argument
    let checkB = func(val)
      if(checkA === checkB){
        return func(val);
      } else {
          return 'inconsistent results';
      }
  }
  // when passing a function as an argument , there shouldnt be ()
  console.log(checkConsistentOutput(addTwo, 8));
  
const robotFactory = (model, mobile) =>{
    return {
      model : model ,
      mobile : mobile,
      beep () {
        console.log('Beep Boop')
      }
    }
  }
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();
  console.log(tinCan);


  // Alternative short hand code 

  function robotFactory(model, mobile){
    return {
      model, // because the key values are the same with the keys so we can actually opt that value out according to ES6
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
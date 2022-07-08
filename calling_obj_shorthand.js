const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  const {functionality} = robot;
  functionality.beep();
  functionality.fireLaser();
  console.log(`I have a ${this.model} with ${this.energyLevel} Energy Level`)
  
  
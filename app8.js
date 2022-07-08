
// advance object 
const robot = {
    energyLevel: 100,
    checkEnergy () {
      console.log(`Energy is currently at ${this.energyLevel}%.`) // 'this' keyword is not calling the object property when a method ib object is expressed as an arrow function, therefore the computer will return errors 
    }
  }
  
  robot.checkEnergy();
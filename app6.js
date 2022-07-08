// To change the key of an object through functions of variables
let spaceship = {
    "Fuel Type": "Turbo Fuel",
    homePlanet: "Earth",
  };
  
  // Write your code below
  let greenEnergy = (object) => {
    object['Fuel Type'] = 'avocado oil'; // to change key value Fuel Type of spaceship to avocado oil 
  };
  let remotelyDisable = (object1) => {
    object1.disabled = true; // to add a key disble with value of true to spaceship
  }
  greenEnergy(spaceship);
  remotelyDisable(spaceship);
  console.log(spaceship);
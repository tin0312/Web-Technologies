// To access object nested in objects and keys values
let spaceship = {
    passengers: {name: 'Space Cat'},// this can be nested in an Array so that when we call the fucntion , it will print out the key and the key value
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  let capFave = spaceship.crew.captain['favorite foods'][0];// to print out cookies
  let firstPassenger = spaceship.passengers.name;// to print out Space Cat
  console.log(capFave);
  console.log(firstPassenger);
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign( {
  laserBlaster: true, 
  voiceRecognition: true
}
)


console.log(newRobot);

// to check if the substring is in the string 
return string.includes('cake');

// repeat a string n times 
return string.repeat(2);
//Declare a function to get # of sleep of each day of the week
const getSleepHours = (day) => {
    switch (day) {
      case "Monday":
        return 6;
        break;
      case "Tuesday":
        return 6;
        break;
      case "Wednesday":
        return 6;
        breaks;
      case "Thursday":
        return 6;
        break;
      case "Friday":
        return 6;
        break;
      case "Saturday":
        return 8;
        break;
      case "Sunday":
        return 8;
        break;
    }
  };
  getSleepHours();
  console.log(getSleepHours("Monday"));
  // Declare a function to get the total of sleep hours that you actually slept
  
  const getActualSleepHours = () => 
    getSleepHours("Monday") +
      getSleepHours("Tuesday") +
      getSleepHours("Wednesday") +
      getSleepHours("Thursday") +
      getSleepHours("Friday");
    +getSleepHours("Saturday") +      getSleepHours("Sunday");
  ;
  // Declare a function to get the ideal sleep
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  };
  
  // Call the 2 functions to console
  console.log(getActualSleepHours());
  console.log(getIdealSleepHours());
  // Declare a function to calculate sleep debt
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      console.log("You got the perfect amount of sleep");
    } else if(actualSleepHours > idealSleepHours){
      console.log("You got more sleep than needed specifically of " + (idealSleepHours - actualSleepHours)+ "hour(s)");
    } else {
      console.log("You should get some more rest specifically of " + (idealSleepHours - actualSleepHours) + "hour(s)");
    }
  }
  // Call the fucntion to get the hours diff
  console.log(calculateSleepDebt())
  
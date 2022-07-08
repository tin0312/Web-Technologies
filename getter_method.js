const robot = {
    _model: "1E78V2",
    _energyLevel: 100, // _ is to interact with other developers that this property shouldnt be altered
    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return `My current energy level is ${this._energyLevel}`;
      } else {
          return "System malfunction: cannot retrieve energy level"
      }
    }
  };
  console.log(robot.energyLevel);
  console.log(`I have a ${this._model} with ${this._energyLevel}!`)

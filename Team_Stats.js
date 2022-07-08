// Declare a variable team with an empty object
const team = {
    // Declare player property
    _players: [
      { firstName: "Justin", lastName: "Hoang", age: 22 },
      { firstName: "Ryan", lastName: "Le", age: 22 },
      { firstName: "James", lastName: "Vo", age: 22 },
    ],
    // Declare games property
    _games: [
      { opponent: "o1", teamPoints: 10, opponentPoints: 10 },
      { opponent: "o2", teamPoints: 11, opponentPoints: 11 },
      { opponent: "o3", teamPoints: 12, opponentPoints: 12 },
    ],
  
    // getter method to retrieve the _players property
  
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
       
      };
      this.players.push(player); // add player to the array players by push method 
    },
      addGame(newOpponent, newTeamPoints, newOpponentPoints){
        let game = {
          opponent : newOpponent,
          teamPoints : newTeamPoints,
          opponentpoints : newOpponentPoints
        }
        this.games.push(game); // add game to the array games by push method
      }
  };
  team.addGame('Titans', 100, 98);
  console.log(team.games)
  
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team.players);
  
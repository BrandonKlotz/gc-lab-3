// define global game variables and assign values

let pointsNeededToWin = 3;
let healthDepleted = 0;

// getUserName() requires a name of not null value.  It occurs as a pop-up window prompt.

function getUserName() {
  do {
    var getName = prompt("Please enter your Wizard name.");
    if (getName !== null) {
      return getName;
    } else {
      window.alert("Please enter a name to continue.");
    }
  }
  while (getName === null);
}

// startGame() now must now be responsible for the creation of the user and computer objects.  It is initiated when the Start button is clicked.

var startButtonClick = document.getElementById("start");
startButtonClick.onclick = function () {
  startGame();
}

function startGame() {

  // define objects for user character and computer character (alias Grant)
 
  var user = {
    name: '', // A string which will include the user's name
    health: 40, // Starting health total
    wins: 0, // Total number of wins
    attack: getNum(1, 3), // Attack power - random number between x and y (inclusive)
    heal: getNum(1, 10), // Heal power - random number between x and y (inclusive)
    healCount: 2, // Total number of heals available per game
  };

  var compPlayer = {
    name: 'Grant Chirpus', // Default name of computer character
    health:  10, // Starting health total
    wins: 0, // Total number of wins
    attack: getNum(1, 5), // Attack power - random number between x and y (inclusive)
  };

  // Once the game has started, the Start button should be removed from the HTML DOM.

  user.name = getUserName();

  console.log(user.name);

  // At this point, the code should print the current stats to the console.  Then print text to the console text area?

  The block below was a function but for some reason it won't work when defined outside of this function even when it's called from within this function.

  console.log(compPlayer.name);
  
  var userName = document.getElementById("user-name");
  update(userName, user.name);
  var userHealth = document.getElementById("user-health");
  update(userHealth, user.health);
  var userHealCount = document.getElementById("user-heal-count");
  update (userHealCount, user.healCount); 
  var userWins = document.getElementById("user-wins");
  update(userWins, user.wins);
  var computerName = document.getElementById("computer-name");
  update (computerName, compPlayer.name);
  var computerHealth = document.getElementById("computer-health");
  update(computerHealth, compPlayer.health);

  function update(id, stat) {
      id.innerHTML = stat;
    }

// printStats();

printConsoleText("Can you defeat " + compPlayer.name + " a total of " + pointsNeededToWin + " times?  Select an action to begin!")

}

// printStats() is designed to update the curent stats to the web game console interface.

function printStats() {

  console.log(user);
  console.log(compPlayer);
  
  var userName = document.getElementById("user-name");
  update(userName, user.name);
  var userHealth = document.getElementById("user-health");
  update(userHealth, user.health);
  var userHealCount = document.getElementById("user-heal-count");
  update (userHealCount, user.healCount); 
  var userWins = document.getElementById("user-wins");
  update(userWins, user.wins);
  var computerName = document.getElementById("computer-name");
  update (computerName, compPlayer.name);
  var computerHealth = document.getElementById("computer-health");
  update(computerHealth, compPlayer.health);

  function update(id, stat) {
      id.innerHTML = stat;
    }

}

// printConsoleText() takes a string of text and prints it to the web game console interface.

function printConsoleText(text) {
  var console = document.getElementById("console");
  console.innerHTML = text;
}

// getNum() generates a random integer between min and max.

function getNum(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*


function attack(playerOne, playerTwo) {

  playerTwo.health = playerTwo.health - playerOne.attack;
  playerOne.health = playerOne.health - playerTwo.attack;

  console.log(playerOne.name + ' has ' + playerOne.health + ' health..');
  console.log(playerTwo.name + ' has ' + playerTwo.health + ' health..');

  return;
}

function magicPotion(playerOne) {

  if (playerOne.healCount === 2) {
    console.log(playerOne.name + ' has consumed all magic elixars.');
  } else {
    var addHealth = getNum(1,10);
    playerOne.health = playerOne.health + addHealth;
    playerOne.healCount++;
    console.log(playerOne.name + ' has used a magic potion. ' + playerOne.name + ' now has ' + playerOne.health + ' health. And has used ' + playerOne.healCount + ' magic potions of 2.');
  }
  return;

}

function endGame(playerOne, playerTwo) {
  if (playerOne.health < healthDepleted) {
    console.log(playerOne.name + ' Lost');
  } else {
    console.log(playerTwo.name + ' Lost');
  }
  console.log('Game over.');

  playerTwo.health = 10;
  playerOne.health = 40;
  playerOne.wins = 0;
}

function startCombat(playerOne, playerTwo) {

  while (playerOne.wins < pointsNeededToWin && playerOne.health >=healthDepleted) {// Rounds needed to win

    while (playerOne.health >= healthDepleted && playerTwo.health >= healthDepleted) {

      let decidingPrompt = prompt('Would you like to Attack, Heal, or Quit?');

      switch (decidingPrompt) {
        case 'Attack':

          attack(playerOne, playerTwo);
          break;

        case 'attack':

          attack(playerOne, playerTwo);
          break;

        case 'Heal':

          magicPotion(user);
          break;

        case 'heal':

          magicPotion(user);
          break;

        case 'Quit':
          console.log(user.name + ' has quit.');
          return;
          break;

        case 'quit':
          console.log(user.name + ' has quit.');
          return;
          break;

        case null:
          console.log(user.name + ' has quit.');
          return;
          break;

        default:
          window.alert('Please choose to either Attack, Heal, or Quit.');

          break;
        }
      }

      console.log('Round over.')
      playerOne.wins++;
      playerTwo.health = 10;

    }

    endGame(playerOne, playerTwo);
}

*/

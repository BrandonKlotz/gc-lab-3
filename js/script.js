(function() {

// getNum() generates a random integer between min and max.

function getNum(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// define global game variables and assign values

let pointsNeededToWin = 3;
let healthDepleted = 0;
let continueToPlay = "yes";

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

  // Once the game has started, the Start button should be removed from the HTML DOM.  Brandon has worked on this on his own branch.

  user.name = getUserName();

  console.log(user.name);

  // At this point, the code should print the current stats to the console.  Then print text to the console text area?

  printStats(user,compPlayer);

  printConsoleText("Can you defeat " + compPlayer.name + " a total of " + pointsNeededToWin + " times?  Select an action to begin!")

  // And now it's time to begin the game.  There are two while loops:  one for the game and one for a round within the game.

}

// startCombat() contains the code which will execute a game action (attack, quit, or heal) and calculate the result, displaying appropriate text on the console.

function startCombat(buttonSelection) {

  if (buttonSelection == "attack") {

      var userDamage = user.attack();
      compPlayer.health = compPlayer.health - userDamage;
      grantChirpus.health = grantChirpus.health - userDamage;
      var compPlayerDamage = compPlayer.attack();
      userCharacter.health = userCharacter.health - compPlayerDamage;

      printConsoleText(user.name + "deals " + userDamage + " to " + compPlayer.name + ".  " + compPlayer.name + " deals " + compPlayerDamage + " to " + user.name + ".");

  } else if (buttonSelection == "quit") {

      continueToPlay = "no";

  } else if (buttonSelection == "heal") {

    if (user.healCount > 0) {
      var healValue = user.heal();
      user.health = user.health + healValue;
      user.healCount = user.healCount - 1;
      printConsoleText("A magic potion has restored " + healValue + "health.  " + user.name + " has " + user.healCount + " potions remaining.");
    } else if (user.healCount = 0) {
      printConsoleText(user.name + "has no potions left!")
    }

  }

}

// battleRoundLoop() is a while loop for a round of battle.  The round ends when either the user character or computer player is reduced to the minimum health.

function battleRoundLoop() {

  while (user.health > healthDepleted && compPlayer.health > healthDepleted) {

    // Call the startCombat() function and kill the game if kill switch is triggered.  Otherwise, allow damage to occur.

    startCombat();

    if (continueToPlay == "no") {
      return;
    } else {
      damageResolution();
    }

  }

  roundWinnerDetermination();

}

// printStats() is designed to update the curent stats to the web game console interface.

function printStats(playerOne, playerTwo) {

  console.log(playerOne.name);
  console.log(playerTwo.name);

  var userName = document.getElementById("user-name");
  update(userName, playerOne.name);
  var userHealth = document.getElementById("user-health");
  update(userHealth, playerOne.health);
  var userHealCount = document.getElementById("user-heal-count");
  update (userHealCount, playerOne.healCount);
  var userWins = document.getElementById("user-wins");
  update(userWins, playerOne.wins);
  var computerName = document.getElementById("computer-name");
  update (computerName, playerTwo.name);
  var computerHealth = document.getElementById("computer-health");
  update(computerHealth, playerTwo.health);

  function update(id, stat) {
      id.innerHTML = stat;
    }

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

// printConsoleText() takes a string of text and prints it to the web game console interface.

function printConsoleText(text) {
  var console = document.getElementById("console");
  console.innerHTML = text;
}

}
})();

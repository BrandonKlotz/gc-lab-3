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

// getNum() generates a random integer between min and max.

function getNum(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*


function attack(playerOne, playerTwo) {

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// startGame() is invoked when the Start button is pressed.  It builds the player stats to set defaults and acquires the player's name.

function startGame() {

// Build user and computer objects.  In a perfect world, we would create these here and then pass them out in an array, but we need to make sure the code works first before we do anything fancy like that.

  user = {
    name: "Hero", // A string which will include the user's name
    health: 40, // Starting health total
    wins: 0, // Total number of wins
    attack: function (min, max) {
      var userAttack = getRandomInt(min, max);
      return userAttack;
    },
    heal: function (min, max) {
      var userHeal = getRandomInt(min, max);
      return userHeal;
    },
    healCount: 2 // Total number of heals available per game
  };

  compPlayer = {
    name: "Grant Chirpus", // Default name of computer character
    health:  10, // Starting health total
    wins: 0, // Total number of wins
    attack: function (min, max) {
      var compAttack = getRandomInt(min, max);
      return compAttack;
    }
  };

  printStats(user,compPlayer);

// Make the Start button disappear, to be replaced with the Quit, Attack, and Heal buttons.

  document.getElementById("header").style.display = "none";
  document.getElementById("controls").style.display = "flex";

  user.name = getUserName();

function endGame(playerOne, playerTwo) {
  if (playerOne.health < healthDepleted) {
    console.log(playerOne.name + ' Lost');
  } else {
    console.log(playerTwo.name + ' Lost');
  }
  console.log('Game over.');

}

function startCombat(buttonSelection) {

  if (buttonSelection == "attack") {

      var userDamage = user.attack(1,3);
      compPlayer.health = compPlayer.health - userDamage;
      var compPlayerDamage = compPlayer.attack(1,5);
      user.health = user.health - compPlayerDamage;
      printConsoleText(user.name + " deals " + userDamage + " to " + compPlayer.name + ".  " + compPlayer.name + " deals " + compPlayerDamage + " to " + user.name + ".  Now what?");
      printStats(user,compPlayer);

  } else if (buttonSelection == "quit") {

      printConsoleText("Running away, are we, " + user.name + "?  Press Start to try again!");
      document.getElementById("header").style.display = "flex";
      document.getElementById("controls").style.display = "none";
      return;

  } else if (buttonSelection == "heal") {

    if (user.healCount > 0) {
      var healValue = user.heal(1,10);
      user.health = user.health + healValue;
      user.healCount = user.healCount - 1;
      printConsoleText("A magic potion has restored " + healValue + " health.  " + user.name + " has " + user.healCount + " potions remaining.");
      printStats(user,compPlayer);
    } else if (user.healCount === 0) {
      printConsoleText(user.name + " has no potions left!");
    }

  }

  console.log(user.name + " " + user.health + " || " + compPlayer.name + " " + compPlayer.health);

  if (user.health <= healthDepleted || compPlayer.health <= healthDepleted) {
    endRound();
  }

}

// endRound() figures out which player wins a round (or the game) and displays appropropriate text.  Settings are also prepped for the next round / game.

function endRound() {
  if (user.health > compPlayer.health) {
    user.wins = user.wins + 1;
    if (user.wins < pointsNeededToWin) {
      var pointsStillRemaining = pointsNeededToWin - user.wins;
      printConsoleText(user.name + " successfully knocked out " + compPlayer.name + ", who struggles to his feet ready for more!  Can you defeat him " + pointsStillRemaining + " more time(s)?");
      compPlayer.health = 10;
      printStats(user,compPlayer);
    } else if (user.wins === pointsNeededToWin) {
      printConsoleText("Congrats!  " + compPlayer.name + " has been utterly defeated.  We knew you had it in you, " + user.name + "!  Press Start to play again!");
      document.getElementById("header").style.display = "flex";
      document.getElementById("controls").style.display = "none";
      return;
    }
  } else if (compPlayer.health > user.health) {
    compPlayer.wins = compPlayer.wins + 1;
    printConsoleText(user.name + " has been reduced to " + user.health + " health and " + compPlayer.name + " emerges victorious!  Better luck next time!");
    document.getElementById("header").style.display = "flex";
    document.getElementById("controls").style.display = "none";
    return;
  } else if (compPlayer.health == user.health && user.wins !== pointsNeededToWin) {
    printConsoleText("Both " + user.name + " and " + compPlayer.name + " collapse from their injuries.  But " + user.name + " did not win " + pointsNeededToWin + " times!  Want to try again?");
    document.getElementById("header").style.display = "flex";
    document.getElementById("controls").style.display = "none";
    return;
  } else {
    printConsoleText(user.name + " and " + compPlayer.name + " both collapse into the dust.  Looks like this one is a draw!  Want to try again?");
    document.getElementById("header").style.display = "flex";
    document.getElementById("controls").style.display = "none";
    return;
  }

}

// printStats() is designed to update the curent stats to the web game console interface.

function printStats(playerOne, playerTwo) {

  var userName = document.getElementById("user-name");
  update(userName, playerOne.name);
  var userHealth = document.getElementById("user-health");
  update(userHealth, playerOne.health);
  var userHealCount = document.getElementById("user-heal-count");
  update(userHealCount, playerOne.healCount);
  var userWins = document.getElementById("user-wins");
  update(userWins, playerOne.wins);
  var computerName = document.getElementById("computer-name");
  update(computerName, playerTwo.name);
  var computerHealth = document.getElementById("computer-health");
  update(computerHealth, playerTwo.health);

  function update(id, stat) {
      id.innerHTML = stat;
    }

}

// printConsoleText() takes a string of text and prints it to the web game console interface.

function printConsoleText(text) {
  var console = document.getElementById("console");
  console.innerHTML = text;
}

})();

    endGame(playerOne, playerTwo);
}

*/

function getRandomInt() {
  var min = 0;
  var max = 5
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function initGame() {

  var gamePrompt = prompt ("Do you dare enter the Dungeon to face Grant Chirpus?");
  var consent = "yes";
  var checkGamePrompt = gamePrompt === consent;
  var playFalse = "Rerun code to play game.";

  if (checkGamePrompt === true) {
    userName = prompt("Enter your wizarding name!");

    var grant = "Grant Chirpus";
    var userWins = 0;
    var pointsNeededToWin = 3;

    var grantHealth = 10;
    var userHealth = 40;
    var healthDepleted = 0;

    console.log(userName + " enters the dungeon...");

    while (userWins < pointsNeededToWin && userHealth > 0) {// Rounds needed to win

      while (userHealth >= healthDepleted && grantHealth >= healthDepleted) {

        var grantAttack = getRandomInt();
        var userAttack = getRandomInt();

        grantHealth = grantHealth - userAttack;
        userHealth = userHealth - grantAttack;

        console.log(userName + ' has ' + userHealth + ' health..');
        console.log(grant + ' has ' + grantHealth + ' health..');

        }

        console.log('round over')
        userWins++;
        grantHealth = 10;

      }

    if (userHealth < healthDepleted) {
      console.log(userName + ' Lost');
    } else {
      console.log(grant + ' Lost');
    }
    console.log('game over');

  } else {
    console.log('Rerun code to play.')
  }
}

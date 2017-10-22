var grant = 'Grant Chirpus';
var userWins = 0;
var pointsNeededToWin = 3;

var grantHealth = 10;
var userHealth = 40;
var healthDepleted = 0;

function getDamage() {
  var min = 0;
  var max = 5
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function startCombat() {

  while (userWins < pointsNeededToWin && userHealth > 0) {// Rounds needed to win

    while (userHealth >= healthDepleted && grantHealth >= healthDepleted) {

      if (window.confirm('Would you like to continue Attacking?')) {
        console.log(userName + ' decides to attack.');
      } else {
        console.log(userName + ' has ended the game.')
        return;
      }

      var grantAttack = getDamage();
      var userAttack = getDamage();

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

  grantHealth = 10;
  userHealth = 40;
  userWins = 0;

}


function startGame() {

  var gameStartPrompt = prompt ('Do you dare enter the Dungeon?');
  var consent = 'yes';
  var checkGamePrompt = gameStartPrompt === consent;
  var playFalse = 'Rerun code to play game.';

  if (checkGamePrompt !== true) {

      console.log(playFalse);

    } else {
      userName = prompt('Enter your wizarding name!');

      console.log(userName + ' enters the dungeon...');

      startCombat();
    }

}

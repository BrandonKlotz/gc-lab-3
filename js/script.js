var user = {
name: '',
health: 40,
wins: 0,
}

var compPlayer = {
name: 'Grant Chirpus',
health:  10,
wins: 0,
}

let pointsNeededToWin = 3;
let healthDepleted = 0;


function startGame() {

  var gameStartPrompt = prompt ('Do you dare enter the Dungeon?');
  var consent = 'yes';
  var checkGamePrompt = gameStartPrompt === consent;
  var playFalse = 'Rerun code to play game.';

  if (checkGamePrompt !== true) {

      console.log(playFalse);

    } else {
      user.name = prompt('Enter your wizarding name!');

      if (user.name !== null) {

        console.log(user.name + ' enters the dungeon...');

        startCombat();

      } else {
        user.name = prompt('Enter your wizarding name!');
        return;
      }
    }
}

function getDamage() {
  var min = 0;
  var max = 5
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function startCombat() {

  while (user.wins < pointsNeededToWin && user.health >=healthDepleted) {// Rounds needed to win

    while (user.health >= healthDepleted && compPlayer.health >= healthDepleted) {

      if (window.confirm('Would you like to continue Attacking?')) {
        console.log(user.name + ' decides to attack.');
      } else {
        console.log(user.name + ' has ended the game.')
        return;
      }

      var grantAttack = getDamage();
      var userAttack = getDamage();

      compPlayer.health = compPlayer.health - userAttack;
      user.health = user.health - grantAttack;

      console.log(user.name + ' has ' + user.health + ' health..');
      console.log(compPlayer.name + ' has ' + compPlayer.health + ' health..');

      }

      console.log('round over')
      user.wins++;
      grant.health = 10;

    }

  if (user.health < healthDepleted) {
    console.log(user.name + ' Lost');
  } else {
    console.log(compPlayer.name + ' Lost');
  }
  console.log('game over');

  compPlayer.health = 10;
  user.health = 40;
  user.wins = 0;
}

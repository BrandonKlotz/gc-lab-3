var user = {
name: '',
health: 40,
wins: 0,
attack: getNum(1,3),
heal: healUser(),
healCount: 2,
}

var compPlayer = {
name: 'Grant Chirpus',
health:  10,
wins: 0,
attack: getNum(1,5),
}

let pointsNeededToWin = 3;
let healthDepleted = 0;

function healUser(playerOne) {
  if (playerOne.healCount = 0) {

  } else {
    getNum(1,10);
      
  }
}

function startGame(playerOne, playerTwo) {

  var gameStartPrompt = prompt ('Do you dare enter the Dungeon?');
  var consent = 'yes';
  var checkGamePrompt = gameStartPrompt === consent;
  var playFalse = 'Rerun code to play game.';

  if (checkGamePrompt !== true) {

      console.log(playFalse);

    } else {
      playerOne.name = prompt('Enter your wizarding name!');

      if (playerOne.name !== null) {

        console.log(playerOne.name + ' enters the dungeon...');

        startCombat(playerOne, playerTwo);

      } else {
        playerOne.name = prompt('You did not enter a name.. Enter your wizarding name!');
        return;
      }
    }

}

function getNum(min, max) {
  var min;
  var max;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random(min, max) * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function endGame(playerOne, playerTwo) {
  if (playerOne.health < healthDepleted) {
    console.log(playerOne.name + ' Lost');
  } else {
    console.log(playerTwo.name + ' Lost');
  }
  console.log('game over');

  playerTwo.health = 10;
  playerOne.health = 40;
  playerOne.wins = 0;
}

function startCombat(playerOne, playerTwo) {

  while (playerOne.wins < pointsNeededToWin && playerOne.health >=healthDepleted) {// Rounds needed to win

    while (playerOne.health >= healthDepleted && playerTwo.health >= healthDepleted) {

      if (window.confirm('Would you like to continue Attacking?')) {
        console.log(playerOne.name + ' decides to attack.');
      } else {
        console.log(playerOne.name + ' has ended the game.')
        return;
      }

      playerTwo.health = playerTwo.health - playerOne.attack;
      playerOne.health = playerOne.health - playerTwo.attack;

      console.log(playerOne.name + ' has ' + playerOne.health + ' health..');
      console.log(playerTwo.name + ' has ' + playerTwo.health + ' health..');

      }

      console.log('round over')
      playerOne.wins++;
      playerTwo.health = 10;
    }
    endGame(playerOne, playerTwo);
}

// Not using this code. We would use this if we used classes instead of Objects

// class CompPlayer {
//   constructor(name) {
//     this.name = 'Grant Chirpus';
//     this.health = 10;
//   }
//   attack() {
//     getNum(0, 5);
//   }
// }
//
// class User extends CompPlayer {
//   constructor(name) {
//     super(name);
//     this.name = 'height';
//     this.heath = 40;
//     this.wins = 0;
//   }
//   heal() {
//     getNum(0, 3);
//   }
// }

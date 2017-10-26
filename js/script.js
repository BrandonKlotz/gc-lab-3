var user = {
name: '',
health: 40,
wins: 0,
attack: getNum(1,3),
heal: 0,
healCount: 0
}

var compPlayer = {
name: 'Grant Chirpus',
health:  10,
wins: 0,
attack: getNum(1,5)
}

let pointsNeededToWin = 3;
let healthDepleted = 0;

var startBtn = document.getElementById("start");
  startBtn.onclick = function() {
    
    document.getElementById("header").style.display = 'none';
    document.getElementById("controls").style.display = 'flex';

    startGame(user, compPlayer);

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
  console.log('Game over.');

  playerTwo.health = 10;
  playerOne.health = 40;
  playerOne.wins = 0;
}

function startCombat(playerOne, playerTwo) {

  while (playerOne.wins < pointsNeededToWin && playerOne.health >=healthDepleted) {// Rounds needed to win

    while (playerOne.health >= healthDepleted && playerTwo.health >= healthDepleted) {



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



// Hide the buttons until start

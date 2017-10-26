(function startGame(){

function getNum(min, max) {
  var min;
  var max;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random(min, max) * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

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
    startPrompt(user, compPlayer);
}

var attackBtn = document.getElementById("attack");
  attackBtn.onclick = function() {
    attack(user, compPlayer);
}

var healBtn = document.getElementById("heal");
  healBtn.onclick = function() {
    magicPotion(user);
}

var quitBtn = document.getElementById("quit");
  quitBtn.onclick = function() {
    quitGame();
}


const list = document.getElementById('header');

function startPrompt(playerOne, playerTwo) {

  document.getElementById("header").style.display = 'none';
  document.getElementById("controls").style.display = 'flex';

  var gameStartPrompt = prompt ('Do you dare enter the Dungeon?');
  var consent = 'yes';
  var checkGamePrompt = gameStartPrompt === consent;
  var playFalse = 'Rerun code to play game.';

  if (checkGamePrompt !== true) {

      console.log(playFalse);

    } else {
      playerOne.name = prompt('Enter your wizarding name!'); //Brandon will change to input I may be playing in this area

      if (playerOne.name !== null) {

        console.log(playerOne.name + ' enters the dungeon...');

        // startCombat(playerOne, playerTwo);

      } else {
        playerOne.name = prompt('You did not enter a name.. Enter your wizarding name!');
        return;
      }
    }
}

function startCombat() { // Created this for lab specifications

}

function attack(playerOne, playerTwo) {

  playerTwo.health = playerTwo.health - playerOne.attack;
  playerOne.health = playerOne.health - playerTwo.attack;

  console.log(playerOne.name + ' has ' + playerOne.health + ' health..');
  console.log(playerTwo.name + ' has ' + playerTwo.health + ' health..');

  round(playerOne, playerTwo);

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
  } else if (playerTwo.health){
    console.log(playerTwo.name + ' Lost');
  }
  console.log('Game over.');

  playerTwo.health = 10;
  playerOne.health = 40;
  playerOne.wins = 0;
}

function round(playerOne, playerTwo) { // Not working
  if (playerOne.health <= healthDepleted && playerTwo.health <= healthDepleted) {
    console.log('Round over.');
    playerOne.wins++;
    playerTwo.health = 10;
  } else {
    return;
  }
}

function quitGame() { // Currently working
  console.log('Quitter');

  document.getElementById("header").style.display = 'flex';
  document.getElementById("controls").style.display = 'none';

  return;
}

})();



























// Brandon is creating input Button here

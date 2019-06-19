/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const RESET_VALUE = 2;
const PLAYERS = 2;
const DEFAULT_WIN_VALUE = 100;
let winValue = DEFAULT_WIN_VALUE;

let activePlayer = 0;
let current = 0;
const diceBlock = document.querySelector('.dice-block');
const diceElements = [].slice.call(document.querySelectorAll('.dice')); // convert node elements to array

let Gamer = function(name) {
  this.name = name,
  this.score = 0,
  this.wins = 0
};

let players = [];


Gamer.prototype.getScore  = function() {
  return this.score;
};

Gamer.prototype.setScore  = function(newScore) {
  return this.score = newScore;
};

Gamer.prototype.resetScore  = function() {
  return this.score = 0;
};

const askNewPlayer = (newPlayerIndex) => {
  let newPlayerName = prompt(`Введите имя ${newPlayerIndex} игрока`) || `ИГРОК ${newPlayerIndex}`
  return newPlayerName;
}

const createPlayers = () => {
  for (let index = 0; index < PLAYERS; index++) {
    let current = `${index + 1}`;
    let playerName = askNewPlayer(current);
    let player = new Gamer(playerName);
    players.push(player);
    document.querySelector(`#name-${index}`).textContent = player.name;
    document.querySelector(`#score-${index}`).textContent = player.score;
  }
}

const initGame = () => {
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  createPlayers()
  diceBlock.style.display = 'none';
}

initGame();

const randomDiceValue = () => Math.floor(Math.random() * 6) + 1;

const isAllowChangePlayer = (diceValues) => {
  return diceValues.reduce((prev, curr) => {
    return prev === curr || curr === RESET_VALUE ||  prev === RESET_VALUE
  })
}

document.querySelector('.btn-roll').addEventListener('click', function() {
  let dicesValue = [],
      diceSum = 0;
  
  diceBlock.style.display = 'block';
  diceElements.forEach(diceElement => {
    let dice = Math.floor(Math.random() * 6) + 1;
    diceElement.src = `dice-${dice}.png`;
    dicesValue.push(dice);
  });

  if (isAllowChangePlayer(dicesValue)) {
    changePlayer();
  } else {
    document.getElementById('current-'+activePlayer).textContent = current;
    diceSum = dicesValue.reduce((prev, curr) => prev + curr);
    current += diceSum;
    document.getElementById('current-'+activePlayer).textContent = current;

    if (players[activePlayer].score + current >= winValue) {
        players[activePlayer].wins += 1;
        alert(`${players[activePlayer].name} won!!!`);
    }
  }
});

const changePlayer = () => {
  current = 0;
  document.getElementById('current-'+activePlayer).textContent = 0;
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
  activePlayer = +!activePlayer;
  diceBlock.style.display = 'none';
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
}

const saveWinner = (playerIndex) => {
  let winners = JSON.parse(localStorage.getItem('winners')) || [];
  winners[playerIndex] = players[playerIndex]
  localStorage.setItem('winners', JSON.stringify(winners));
}

const getWinners = () => {
  let dataWinners = JSON.parse(localStorage.getItem('winners'));
  let winners = [].concat(dataWinners);
  winners.length > 1 ? winners.sort(function (prev, cur) {
    if (prev.wins < cur.wins) {
      return 1;
    }if (prev.wins > cur.wins) {
      return -1;
    }
  return 0;
  }) : winners;
  return winners;
}

const showWinners = () => {
  let winners = getWinners();
  let winnersTemplate = 'Список победителей\n';
  winners.forEach((winner) => {
    winnersTemplate += `Имя: ${winner.name} Количество побед: ${winner.wins}\n`
  });
  alert(winnersTemplate);
}

document.querySelector('.btn-hold').addEventListener('click', function() {
  players[activePlayer].score += current;
  document.querySelector(`#score-${activePlayer}`).textContent = players[activePlayer].score;
  saveWinner(activePlayer);
  changePlayer();
});


document.querySelector('.btn-new').addEventListener('click', function() {
  initGame();
});

document.querySelector('.input-limit').addEventListener('change', function() {
  winValue = Math.abs(this.value) || DEFAULT_WIN_VALUE;
})

document.querySelector('.btn-winner').addEventListener('click', showWinners)

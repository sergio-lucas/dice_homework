/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
import { DEFAULT_WIN_VALUE } from './constants';
import { showResult, showWinner } from './components/Winners'
import { players } from './store'
import { createPlayers, isAllowChangeGamer } from './components/Player';
import { throwDice } from './components/Dice'

let winValue = DEFAULT_WIN_VALUE;
let activePlayer = 0;
let current = 0;
const diceBlock = document.querySelector('.dice-block');


const initGame = () => {
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  createPlayers();
  diceBlock.style.display = 'none';
}

initGame();

const saveWinner = (winner) => {
  localStorage.setItem(winner.name, JSON.stringify({wins: winner.wins}));
};

document.querySelector('.btn-roll').addEventListener('click', function() {
  let dicesValue = [],
      diceSum = 0
  
  diceBlock.style.display = 'block';
  dicesValue = throwDice();
  if (isAllowChangeGamer(dicesValue)) {
    changePlayer();
  } else {
    document.getElementById('current-'+activePlayer).textContent = current;
    diceSum = dicesValue.reduce((prev, curr) => prev + curr);
    current += diceSum;
    document.getElementById('current-'+activePlayer).textContent = current;

    if (players[activePlayer].score + current >= winValue) {
        players[activePlayer].wins += 1;
        saveWinner(players[activePlayer]);
        showWinner(players[activePlayer].name);
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

document.querySelector('.btn-hold').addEventListener('click', function() {
  let player = players[activePlayer];
  player.score += current;
  document.querySelector(`#score-${activePlayer}`).textContent = player.score;
  changePlayer();
});


document.querySelector('.btn-new').addEventListener('click', function() {
  initGame();
});

document.querySelector('.input-limit').addEventListener('change', function() {
  winValue = Math.abs(this.value) || DEFAULT_WIN_VALUE;
})

document.querySelector('.btn-winner').addEventListener('click', showResult)

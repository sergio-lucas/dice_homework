/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const RESET_VALUE = 1;

let scores = [0, 0];
let activePlayer = 0;
let current = 0;
const diceBlock =document.querySelector('.dice-block');
const diceElements = [].slice.call(document.querySelectorAll('.dice')); // convert node elements to array

const initGame = () => {
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  diceBlock.style.display = 'none';
}

initGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
  let dice = Math.floor(Math.random() * 6) + 1;
  
  diceBlock.style.display = 'block';
  diceElements.forEach(diceElement => {
      diceElement.src = `dice-${dice}.png`;
  });

  if (dice !== RESET_VALUE) {
    current += dice;
    document.getElementById('current-'+activePlayer).textContent = current;

    if (scores[activePlayer] + current >= 20) {
      alert(`Player ${activePlayer} won!!!`);
    }
    
  } else {
    changePlayer();
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
  scores[activePlayer] += current;
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
  changePlayer();
});


document.querySelector('.btn-new').addEventListener('click', function() {
  initGame();
});
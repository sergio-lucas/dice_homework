import { PLAYERS, RESET_VALUE } from '../constants/index';
import Gamer from '../models/Gamer';
import { players, addPlayer, clearPlayers } from '../store';

const askNewPlayer = (newPlayerIndex) => {
    let newPlayerName = prompt(`Введите имя ${newPlayerIndex} игрока`) || `ИГРОК ${newPlayerIndex}`;
    return newPlayerName;
};

const getPlayer = (userName) => {
    return localStorage.getItem(userName);
};

export const createPlayers = () => {
    clearPlayers();
    for (let index = 0; index < PLAYERS; index++) {
      let current = `${index + 1}`;
      let name = askNewPlayer(current);
      let player = null;
      let oldPlayer = JSON.parse(getPlayer(name));
      if (oldPlayer) {
        let isUserCreated = confirm('Пользователь с таким именем уже существует. Продолжить?');
        if (isUserCreated) {
          let curPlayer = {name, ...oldPlayer}
          player = new Gamer(curPlayer);
        } else {
          let name = prompt('Введите другое имя');
          player = new Gamer({name});
        }
      } else {
        player = new Gamer({name});
      }
      document.querySelector(`#name-${index}`).textContent = player.name;
      document.querySelector(`#score-${index}`).textContent = player.score;
      players.push(player);
    }
    return players;
  };

  export const isAllowChangeGamer = (diceValues) => {
    return diceValues.reduce((prev, curr) => {
      return prev === curr || curr === RESET_VALUE ||  prev === RESET_VALUE
    })
  };

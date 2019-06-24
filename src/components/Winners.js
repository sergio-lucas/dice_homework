const getWinners = () => {
    const winners = Object.keys(localStorage).map(key => {
      return {
        name: key, ...JSON.parse(localStorage.getItem(key))
      }
    });
    winners.length > 1 ? winners.sort(function (prev, cur) {
        if (prev.wins < cur.wins) {
        return 1;
        }if (prev.wins > cur.wins) {
        return -1;
        }
    return 0;
    }) : winners;
    return winners;
};

export const showResult = () => {
    let winners = getWinners();
    let winnersTemplate = 'Список победителей\n';
    winners.forEach((winner) => {
      winnersTemplate += `Имя: ${winner.name} Количество побед: ${winner.wins}\n`
    });
    alert(winnersTemplate);
  };

export const showWinner = (name) => {
    alert(`${name} won!!!`);
}
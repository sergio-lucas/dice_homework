const diceElements = [].slice.call(document.querySelectorAll('.dice')); // convert node elements to array
const randomDiceValue = () => Math.floor(Math.random() * 6) + 1;


export const throwDice = () => {
    let dicesValue = [];
    diceElements.forEach(diceElement => {
        let dice = randomDiceValue();
        diceElement.src = `dice-${dice}.png`;
        dicesValue.push(dice);
    });
    return dicesValue;
}

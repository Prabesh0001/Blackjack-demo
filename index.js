function randomNumber2to11() {
    return Math.floor(Math.random() * 10) + 2;
}

let message = "";
let cards = [];
let sum = 0
let isAlive = false; 
let hasblackjack = false;

let messageEl= document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name : "Superman",
    chips : 88
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " : $" + player.chips;

function startGame() {
    isAlive = true;
    let firstCard = randomNumber2to11();
    let secondCard = randomNumber2to11();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();

}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
    message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You have got a blackjack.";
        hasbalckjack = true;
    } else {
        message = "You're out of the game.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if(isAlive===true && hasblackjack===false){
        let newCard = randomNumber2to11();
        sum += newCard;
        cards.push(newCard)
        renderGame();
    }
   
}




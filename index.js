function randomnumber2to11() {
    return Math.floor(Math.random() * 10) + 2;
}

let firstCard = randomnumber2to11();
let secondCard = randomnumber2to11();
sum = firstCard + secondCard;

let message = "";
let cards = [firstCard, secondCard];
isAlive = true; 

let messageEl= document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " and " + cards[1];
    sumEl.textContent = "Sum: " + sum;
    

    if (sum <= 20) {
    message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "You have got a blackjack.";
        hasbalckjack = true;
    } else {
        message = "You're out of the game.";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let newCard = randomnumber2to11();
    sum += newCard;
    cards.push(newCard)
    console.log(cards)

    renderGame();
}




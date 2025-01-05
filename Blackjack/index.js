


const placeBetInputDOM = document.getElementById("placeBetInput")
const placeBetButtonDOM = document.getElementById("placeBetButton");
const walletMoneyDOM = document.getElementById("walletMoney");
const playerHandDOM = document.getElementById("playerHand");
const bankHandDOM = document.getElementById("bankHand")
const counterForPlayerDOM = document.getElementById("counterForPlayer")
const counterForBankDOM = document.getElementById("counterForBank")
const putButtonDOM = document.getElementById("putButton")
const instructionsDOM = document.getElementById("instructions")
const stayButtonDOM = document.getElementById("stayButton");

let deck = [];
let countValueForPlayer = 0;
let countValueForBank = 0;
let gameInProgress = false;







placeBetButtonDOM.addEventListener("click",function(){
    console.log("Hej")
    if(placeBetInputDOM.value >= 10 && Number(walletMoneyDOM.textContent) >= Number(placeBetInputDOM.value) && !gameInProgress) {
        countValueForBank = 0;
        countValueForPlayer = 0;
        deck = []
        gameInProgress = true;
        playerHandDOM.innerHTML = ""
        bankHandDOM.innerHTML = ""
        walletMoneyDOM.textContent = `${Number(walletMoneyDOM.textContent) - Number(placeBetInputDOM.value)}`
        deck = getDeck()
        dealCardToPlayer(2, deck)
        dealCardToBank(1, deck)
        console.log(deck)
        instructionsDOM.textContent = "Hit or Stay"
        


    }
})

document.addEventListener("keydown",function(event){
    if(event.code === "Space" && gameInProgress) {
        dealCardToPlayer(1,deck)
    }
})

stayButtonDOM.addEventListener("click", function(){
    if(gameInProgress) {
        console.log("jsiwec")
        dealCardToBank(1, deck)
        gameInProgress = false;
        while(countValueForBank <= 16) {
            dealCardToBank(1, deck);
        }
        winOrLose()
    }
    
})

const colors = ["Club", "Diamond", "Spade", "Heart"]
function getDeck(){
    for(let color of colors) {
        for(let i = 1; i<=10; i++) {
            deck.push({
                color:color,
                value:i,
            })
        }
    }
    return deck;

}
function dealCardToPlayer(nCards,deck) {
    for(let i = 0; i<nCards; i++) {
        const index = randNumber(deck)
        const card = deck[index];
        deck.splice(index,1)
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("cards")
        cardDiv.innerHTML = `${card.color}<br>${card.value}`
        playerHandDOM.appendChild(cardDiv);
        countValueForPlayer = countValueForPlayer + card.value
    }
    counterForPlayerDOM.textContent = countValueForPlayer

}



function dealCardToBank(nCards,deck) {
    for(let i = 0; i<nCards; i++) {
        const index = randNumber(deck)
        const card = deck[index];
        deck.splice(index,1)
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("cards")
        cardDiv.innerHTML = `${card.color}<br>${card.value}`
        bankHandDOM.appendChild(cardDiv);
        countValueForBank = countValueForBank + card.value

    }
    counterForBankDOM.textContent = countValueForBank
}



function winOrLose() {
    console.log("WinANDLOSe")
   
    if(countValueForPlayer === 21 && countValueForBank === 21) {
        instructionsDOM.textContent = "Both Got Blackjack!";
        walletMoneyDOM.textContent = `${Number(walletMoneyDOM.textContent) + Number(placeBetInputDOM.value)}`
        bothGotBlackjack = true 
    }
    if(countValueForBank === 21) {
        instructionsDOM.textContent = "Bank Got Blackjack!, Bet Again?";

    }
    if(countValueForPlayer === 21) {
        instructionsDOM.textContent = "You Got Blackjack!, Bet Again?";
        walletMoneyDOM.textContent = `${Number(walletMoneyDOM.textContent) + (2 * Number(placeBetInputDOM.value))}`

    }
    if(countValueForBank > countValueForPlayer && countValueForBank < 21 && countValueForPlayer < 21) {
        instructionsDOM.textContent = "Bank Won, Bet Again?";

    }
    if(countValueForBank < countValueForPlayer && countValueForBank < 21 && countValueForPlayer < 21) {
        instructionsDOM.textContent = "You Won, Bet Again?";
        walletMoneyDOM.textContent = `${Number(walletMoneyDOM.textContent) + (2 * Number(placeBetInputDOM.value))}`

    }
    if(countValueForBank > 21 && countValueForPlayer < 21) {
        instructionsDOM.textContent = "You Won, Bet Again?";
        walletMoneyDOM.textContent = `${Number(walletMoneyDOM.textContent) + (2 * Number(placeBetInputDOM.value))}`
    }
    if(countValueForBank < 21 && countValueForPlayer > 21) {
        instructionsDOM.textContent = "Bank Won, Bet Again?";
        
    }
    if(countValueForBank === countValueForPlayer) {
        instructionsDOM.textContent = "Its Even, Bet Again?";
        walletMoneyDOM.textContent = `${Number(walletMoneyDOM.textContent) + Number(placeBetInputDOM.value)}`
    }
    if(countValueForBank > 21 && countValueForPlayer > 21) {
        instructionsDOM.textContent = "Both Lose, Bet Again?";

    }
    console.log(gameInProgress)
}



function randNumber(array) {
    return  Math.floor((array.length) * Math.random())
}

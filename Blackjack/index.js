


const placeBetInputDOM = document.getElementById("placeBetInput")
const placeBetButtonDOM = document.getElementById("placeBetButton");
const walletMoneyDOM = document.getElementById("walletMoney");
const playerHandDOM = document.getElementById("playerHand");
const bankHandDOM = document.getElementById("bankHand")
const counterForPlayerDOM = document.getElementById("counterForPlayer")
const counterForBankDOM = document.getElementById("counterForBank")

let deck = [];
let countValueForPlayer = 0;
let countValueForBank = 0;

placeBetButtonDOM.addEventListener("keydown", function(event) {
    if (event.key === "") {
        event.preventDefault();
    }
});
placeBetButtonDOM.addEventListener("click",function(){
    if(placeBetInputDOM.value >= 10 && Number(walletMoneyDOM.textContent) >= Number(placeBetInputDOM.value)) {
        deck = []
        walletMoneyDOM.textContent = `${Number(walletMoneyDOM.textContent) - Number(placeBetInputDOM.value)}`
        deck = getDeck()
        dealCardToPlayer(2, deck)
        dealCardToBank(1, deck)
        console.log(deck)

    }
})




const colors = ["Club", "Diamond", "Spade", "Heart"]
function getDeck(){
    for(let color of colors) {
        for(let i = 1; i<=13; i++) {
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
function randNumber(array) {
    return  Math.floor((array.length) * Math.random())
}

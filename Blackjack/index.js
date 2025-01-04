


const placeBetInputDOM = document.getElementById("placeBetInput")
const placeBetButtonDOM = document.getElementById("placeBetButton");
const walletMoneyDOM = document.getElementById("walletMoney");
const playerHand = document.getElementById("playerHand");

placeBetButtonDOM.addEventListener("click",function(){
    if(placeBetInputDOM.value >= 10 && Number(walletMoneyDOM.textContent) >= Number(placeBetInputDOM.value)) {
        walletMoneyDOM.textContent = `${Number(walletMoneyDOM.textContent) - Number(placeBetInputDOM.value)}`
        let deck = getDeck()
        dealCardToPlayer(2, deck)

    }
})












const colors = ["Clubs", "Diamonds", "Spades", "Hearts"]
function getDeck(){
    const deck = [];
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
function dealCardToPlayer(nCards,inDeck) {
    for(let i = 0; i<nCards; i++) {
        const index = randNumber(inDeck)
        const card = inDeck[index];
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("cards")
        cardDiv.textContent = `${card.color} ${card.value}`
        playerHand.appendChild(cardDiv);
    }
}
function randNumber(array) {
    return  Math.floor((array.length) * Math.random())
}

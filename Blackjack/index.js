


const placeBetInputDOM = document.getElementById("placeBetInput")
const placeBetButtonDOM = document.getElementById("placeBetButton");


placeBetButtonDOM.addEventListener("click",function(){
    if(placeBetInputDOM.value >= 10) {
        console.log(placeBetInputDOM.value)
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


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


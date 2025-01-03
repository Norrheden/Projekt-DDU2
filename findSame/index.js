const findSameDOM = document.getElementById("findSame");
let findSameText = document.createElement("p");
findSameText.textContent = "Click on a number to find copies";
findSameDOM.appendChild(findSameText);
let resetButton = document.createElement("button")
resetButton.textContent = "Reset";
findSameDOM.appendChild(resetButton)


document.addEventListener("click", function() {
    if (!checkIfWehavecreatedRandomsCells) {
        divsCellsAddClassForFindSame();
        checkIfWehavecreatedRandomsCells = true;
    }
});


function divsCellsAddClassForFindSame(){
    for(let i = 0; i<divsCells.length; i++) {
        divsCells[i].addEventListener("click", function(){
            counter = 0;
            for(let j = 0; j< divsCells.length; j++) {
                divsCells[j].classList.remove("markCellWithGreen")
            }
            divsCells[i].classList.add("markCellWithGreen")
            takeCellsValue = divsCells[i].textContent;
            findSameCellInTheGrid(takeCellsValue)
            console.log(takeCellsValue)

        })
    }
    
}
function findSameCellInTheGrid(takeCellsValue) {
    for(let i = 0; i<divsCells.length; i++) {
        if(takeCellsValue == divsCells[i].textContent) {
            divsCells[i].classList.add("markCellWithGreen")
            counter = counter + 1;
        }
    }
    findSameText.textContent = `${counter} copies of the number ${takeCellsValue}`;
    
}

resetButton.addEventListener("click", function(){
    for(let i = 0; i< divsCells.length; i++) {
        divsCells[i].classList.remove("markCellWithGreen")
    }
    findSameText.textContent = "Click on a number to find copies";
})

let takeCellsValue = 0;
let counter = 0;

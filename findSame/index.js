const findSameDOM = document.getElementById("findSame");
let findSameText = document.createElement("p");
findSameText.textContent = "Click on a number to find copies";
findSameDOM.appendChild(findSameText);
let resetButton = document.createElement("button")
resetButton.textContent = "Reset";
findSameDOM.appendChild(resetButton)

let checkIfWehavecreatedRandomsCells = false;

document.addEventListener("click", function() {
    if (!checkIfWehavecreatedRandomsCells) {
        divsCellsAddClassForFindSame();
        checkIfWehavecreatedRandomsCells = true;
    }
});


let takeCellsValue = 0;



function divsCellsAddClassForFindSame(){
    for(let i = 0; i<divsCells.length; i++) {
        divsCells[i].classList.remove("markCellWithGreen")
        divsCells[i].addEventListener("click", function(){
            divsCells[i].classList.add("markCellWithGreen")
            takeCellsValue = divsCells[i].textContent;
            findSameCellInTheGrid(takeCellsValue)
            console.log(takeCellsValue)

        })
    }
    
}
function findSameCellInTheGrid(takeCellsValue) {
    for(let i = 0; i<divsCells.length; i++) {
        console.log("sf")
        if(takeCellsValue == divsCells[i].textContent) {
            divsCells[i].classList.add("markCellWithGreen")
        }
    }
}

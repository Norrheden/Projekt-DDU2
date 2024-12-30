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
        divsCells[i].addEventListener("click", function(){
            divsCells[i].classList.add("markCellWithGreen")
            takeCellsValue = divsCells[i].textContent;
            console.log(takeCellsValue)

        })
    }
}

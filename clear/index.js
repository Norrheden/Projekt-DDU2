const clearDOM = document.getElementById("clear")
const buttonElemntClear = document.createElement("button")
buttonElemntClear.textContent = "Fill Cleared"
clearDOM.appendChild(buttonElemntClear)

let textForCell = [];
let checkIfWehavecreatedRandomsCells = false;

document.addEventListener("click", function() {
    if (!checkIfWehavecreatedRandomsCells) {
        divsCellsAddClass();
        checkIfWehavecreatedRandomsCells = true;
    }
});

function divsCellsAddClass() {
    for (let i = 0; i < divsCells.length; i++) {

        textForCell.push(divsCells[i].textContent);
        divsCells[i].classList.add("markCellWithBlue");
        
        divsCells[i].addEventListener("click", function() {
            if (divsCells[i].classList.contains("markCellWithRed")) {
                divsCells[i].classList.remove("markCellWithOrange");
                divsCells[i].classList.remove("markCellWithRed");
                divsCells[i].textContent = textForCell[i];
                divsCells[i].classList.add("markCellWithBlue");
            } else {
                divsCells[i].classList.remove("markCellWithBlue");
                divsCells[i].textContent = "";
                divsCells[i].classList.add("markCellWithOrange");
                divsCells[i].classList.add("markCellWithRed");
            }
        });
    }
}
    

buttonElemntClear.addEventListener("click", function() {
    for (let i = 0; i < divsCells.length; i++) {
        divsCells[i].classList.remove("markCellWithOrange", "markCellWithRed");
        divsCells[i].textContent = textForCell[i];
    }
});

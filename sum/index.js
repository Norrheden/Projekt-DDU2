const sumFirstRowDOM = document.getElementById("sumFirstRow");
const sumSecondRowDOM = document.getElementById("sumSecondRow");
const pElementSumOfAll = document.createElement("p"); pElementSumOfAll.textContent = "Sum of all:"; sumFirstRowDOM.appendChild(pElementSumOfAll);
const sumOfAllInput = document.createElement("input"); sumOfAllInput.placeholder = "-"; sumFirstRowDOM.appendChild(sumOfAllInput); sumOfAllInput.readOnly = true; sumOfAllInput.classList.add("noHoverAndClick", "sumInput");
const pElementSumOfMarked = document.createElement("p"); pElementSumOfMarked.textContent = "Sum of marked:"; sumSecondRowDOM.appendChild(pElementSumOfMarked);
const sumOfMarkedInput = document.createElement("input"); sumOfMarkedInput.placeholder = "-"; sumSecondRowDOM.appendChild(sumOfMarkedInput); sumOfMarkedInput.readOnly = true; sumOfMarkedInput.classList.add("noHoverAndClick", "sumInput");
const resetButton = document.createElement("button"); resetButton.textContent = "Reset"; sumSecondRowDOM.appendChild(resetButton);

let sumOfAllCounter = 0;
let sumOfMarkedCounter = 0;

document.addEventListener("click", function() {

    if (!checkIfWehavecreatedRandomsCells) {
        SumAllNumbers();
        sumOfMarkedInput.placeholder = "-";
        sumOfAllCounter = 0;
        sumOfMarkedCounter = 0;

        checkIfWehavecreatedRandomsCells = true;
    }
    

})

function SumAllNumbers(){
    sumOfAllCounter = 0;
    for(let i = 0; i<divsCells.length; i++ ) {
        divsCells[i].addEventListener("click", function(){
            if(divsCells[i].classList.contains("markGreen")) {
                divsCells[i].classList.remove("markGreen");
                sumOfMarkedCounter -= Number(divsCells[i].textContent);
                sumOfMarkedInput.placeholder = `${sumOfMarkedCounter}`;
            } else {
                divsCells[i].classList.add("markGreen");
                sumOfMarkedCounter += Number(divsCells[i].textContent);
                sumOfMarkedInput.placeholder = `${sumOfMarkedCounter}`;

            }
            

        })
        sumOfAllCounter += Number(divsCells[i].textContent);
    }
    sumOfAllInput.placeholder = `${sumOfAllCounter}`;
}

resetButton.addEventListener("click",function(){
    for(let i = 0; i< divsCells.length; i++) {
        if(divsCells[i].classList.contains("markGreen")) {
            divsCells[i].classList.remove("markGreen");
            sumOfMarkedCounter = 0;;
            sumOfMarkedInput.placeholder = `-`;

        }
    }
})
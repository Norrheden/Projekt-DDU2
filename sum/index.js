const sumFirstRowDOM = document.getElementById("sumFirstRow");
const sumSecondRowDOM = document.getElementById("sumSecondRow");

const pElementSumOfAll = document.createElement("p"); pElementSumOfAll.textContent = "Sum of all:"; sumFirstRowDOM.appendChild(pElementSumOfAll);
const sumOfAllInput = document.createElement("input"); sumOfAllInput.placeholder = "-"; sumFirstRowDOM.appendChild(sumOfAllInput); sumOfAllInput.readOnly = true; sumOfAllInput.classList.add("noHoverAndClick")
const pElementSumOfMarked = document.createElement("p"); pElementSumOfMarked.textContent = "Sum of marked:"; sumSecondRowDOM.appendChild(pElementSumOfMarked);
const sumOfMarkedInput = document.createElement("input"); sumOfMarkedInput.placeholder = "-"; sumSecondRowDOM.appendChild(sumOfMarkedInput); sumOfMarkedInput.readOnly = true; sumOfMarkedInput.classList.add("noHoverAndClick")

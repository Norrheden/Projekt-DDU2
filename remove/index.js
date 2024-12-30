const removeDOM = document.getElementById("remove");
const getRandomNumberButton = document.createElement("button")
getRandomNumberButton.textContent = "New Random Number";
const getRandomNumberInput = document.createElement("input");
getRandomNumberInput.placeholder = "-"
const removeButton = document.createElement("button");
removeButton.textContent = "Remove"
const removeInput = document.createElement("input")
removeInput.id = "removeInput"
removeInput.placeholder = "-"
removeDOM.appendChild(getRandomNumberButton);
removeDOM.appendChild(getRandomNumberInput);
removeDOM.appendChild(removeButton);
removeDOM.appendChild(removeInput);

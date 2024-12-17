const addUpDom = document.getElementById("addUp");

const pElement = document.createElement("p");
pElement.textContent = `Add up to:`
addUpDom.appendChild(pElement)
const inputElemntAddUp = document.createElement("input");
inputElemntAddUp.type = "text"
addUpDom.appendChild(inputElemntAddUp)
const buttonElementAddUp = document.createElement("button");
buttonElementAddUp.textContent = `Find two cells that add up`
addUpDom.appendChild(buttonElementAddUp)


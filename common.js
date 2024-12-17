const bodyDOM = document.querySelector("body");
const homeDOM = document.getElementById("home");
const controlsDOM = document.getElementById("controls")
const creatorDOM = document.getElementById("creator")


homeDOM.innerHTML = `Home`;

creatorDOM.innerHTML = `<p>How many numbers in the grid?</p>`
const inputElement = document.createElement("input");
inputElement.type = "text"
creatorDOM.appendChild(inputElement)
const buttonElement = document.createElement("button");
buttonElement.textContent = `Create`
creatorDOM.appendChild(buttonElement)






function randInt(min, max) {
    return min + Math.floor((max + 1 - min) * Math.random())
}

function createGrid() {

}

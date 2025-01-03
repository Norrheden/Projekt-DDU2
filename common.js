const bodyDOM = document.querySelector("body");
const homeDOM = document.getElementById("home");
const controlsDOM = document.getElementById("controls")
const creatorDOM = document.getElementById("creator")
const numbersDOM = document.getElementById("numbers")
homeDOM.innerHTML = `Home`;
creatorDOM.innerHTML = `<p>How many numbers in the grid?</p>`
const inputElement = document.createElement("input");
inputElement.type = "text"
creatorDOM.appendChild(inputElement)
const buttonElement = document.createElement("button");
buttonElement.textContent = `Create`
creatorDOM.appendChild(buttonElement)



function generateGridOfRandomNumbers(howManyRandomNumbers){
    
    for(let i = 0; i<howManyRandomNumbers; i++) {
        let divCell = document.createElement("div");
        divCell.classList.add("randomNumbersCell");
        divCell.classList.add("displayFlex")
        divCell.textContent = randInt(0,99);
        numbersDOM.appendChild(divCell)
        
    }
    checkIfWehavecreatedRandomsCells = false;

}


buttonElement.addEventListener("click", function(){
    numbersDOM.innerHTML = ""
    generateGridOfRandomNumbers(inputElement.value)
    divsCells = document.querySelectorAll(".randomNumbersCell");
    

    

})



function randInt(min, max) {
    return min + Math.floor((max + 1 - min) * Math.random())
}

let checkIfWehavecreatedRandomsCells = false;
let divsCells = null;




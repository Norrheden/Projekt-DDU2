const removeDOM = document.getElementById("remove");
const getRandomNumberButton = document.createElement("button")
getRandomNumberButton.textContent = "New Random Number";
const getRandomNumberInput = document.createElement("input");
getRandomNumberInput.placeholder = "-"
getRandomNumberInput.classList.add("noHoverAndClick")
const removeButton = document.createElement("button");
removeButton.textContent = "Remove"
const removeInput = document.createElement("input")
removeInput.id = "removeInput"
removeInput.classList.add("noHoverAndClick")
removeInput.placeholder = "-"
getRandomNumberInput.readOnly = true;
removeInput.readOnly = true;
removeDOM.appendChild(getRandomNumberButton);
removeDOM.appendChild(getRandomNumberInput);
removeDOM.appendChild(removeButton);
removeDOM.appendChild(removeInput);

document.addEventListener("click", function() {

    if (!checkIfWehavecreatedRandomsCells) {
        addEventListenerToRemovePage();
        checkIfWehavecreatedRandomsCells = true;
    }
    

})



let randNumber = null;

function addEventListenerToRemovePage (){
    for(let i = 0; i<divsCells.length; i++ ) {
        divsCells[i].classList.add("orangeColor")
    }

}

getRandomNumberButton.addEventListener("click", function(){
    randNumber = randInt(0,99);
    getRandomNumberInput.placeholder = randNumber
    findTheRandomNumber
})

function findTheRandomNumber() {



}
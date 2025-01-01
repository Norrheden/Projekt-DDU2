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


function addEventListenerToRemovePage (){
    for(let i = 0; i<divsCells.length; i++ ) {
        divsCells[i].classList.add("lightOrangeColor")
    }

}


getRandomNumberButton.addEventListener("click", function(){
    let randNumber = randInt(0,99);
    getRandomNumberInput.placeholder = randNumber
    removeInput.placeholder = `-`
    findTheRandomNumber(randNumber)
    
    
})

let getNumber = null;
let counter = 0;

function findTheRandomNumber(randNumber) {
    for(let i = 0; i<divsCells.length; i++) {
        divsCells[i].classList.remove("markOrange")
        if(randNumber == divsCells[i].textContent) {
            divsCells[i].classList.add("markOrange");
            getNumber = divsCells[i].textContent;
            counter = counter + 1;

        }
    }
}

removeButton.addEventListener("click", function(){
    let found = false;
    for(let i = 0; i<divsCells.length; i++) {
        if(getNumber == divsCells[i].textContent) {
            divsCells[i].textContent = "X"
            divsCells[i].classList.add("markRed")
            divsCells[i].classList.remove("lightOrangeColor")
            found = true;
        } 
    }

    if(found) {
        removeInput.placeholder = `${getNumber} removed ${counter}`;
        counter = 0;

    } else {
        removeInput.placeholder = `Nothing to remove`;
    }

    
})
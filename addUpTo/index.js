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





buttonElementAddUp.addEventListener("click", function(){
    let sum = inputElemntAddUp.value;
    let sumFound = false;
    for(let i = 0; i < divsCells.length; i++) {
        divsCells[i].classList.remove("addUpToColorCell");
    }
    for(let i = 0; i < divsCells.length-1; i++) {
        for(let j = i + 1; j<divsCells.length; j++){
            if(i !==j && (parseInt(divsCells[i].textContent) + parseInt(divsCells[j].textContent)) == sum) {
                divsCells[i].classList.add("addUpToColorCell");
                divsCells[j].classList.add("addUpToColorCell");
                sumFound = true;
                break;
            }
        }
        if(sumFound) {
            break;
        }
    }
})

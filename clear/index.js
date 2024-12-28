const clearDOM = document.getElementById("clear")
const buttonElemntClear = document.createElement("button")
buttonElemntClear.textContent = "Fill Cleared"
clearDOM.appendChild(buttonElemntClear)

document.addEventListener("click",function(){
    for(let i = 0; i<divsCells.length; i++) {
        divsCells[i].classList.add("markCellWithBlue")

        divsCells[i].addEventListener("click", function(){
            divsCells[i].classList.remove("markCellWithBlue")
            divsCells[i].textContent = ""
            divsCells[i].classList.add("markCellWithOrange")
            divsCells[i].classList.add("markCellWithRed")

        })
        
    }

})



const generateButton = document.querySelector("#generate")
const inputBox = document.getElementById("length")
const gridDiv = document.querySelector(".gridDiv")
let inputSideLength = parseInt(inputBox.value)

function setEventListeners(widthHeightString) {
    const squares = document.querySelectorAll(".square")
    for (i = 0; i < squares.length; i++) {
        let currentSquare = squares[i]
        squares[i].addEventListener("mouseover", () => {
            let currentOpacity = parseFloat(getComputedStyle(currentSquare).opacity)
            let newOpacity = currentOpacity + 0.1
            currentSquare.setAttribute("style", "background: black;" + widthHeightString + `opacity: ${newOpacity};`)
        })
        2
        squares[i].addEventListener("mouseout", () => {
            let currentOpacity = parseFloat(getComputedStyle(currentSquare).opacity)
            currentSquare.setAttribute("style", "background: black;" + widthHeightString + `opacity: ${currentOpacity};`)
        })

    }
}

function generateGrid(sideLength) {
    console.log(typeof sideLength)
    if ((sideLength == 0) || (sideLength == "NaN")) {
        return window.alert("Write a side length")
    }
    if (sideLength > 100) {
        return window.alert("Input a number less than 100")
    }
    gridDiv.innerHTML = ""
    let widthHeightString = `width : ${600/sideLength}px; height: ${600/sideLength}px;`
    console.log(widthHeightString)
    for (i = 0; i < sideLength; i++) {
        let newRow = document.createElement("div")
        newRow.setAttribute("class", "rows")
        gridDiv.appendChild(newRow)
        for (j = 0; j < sideLength; j++) {
            newSquare = document.createElement("div")
            newSquare.setAttribute("class", "square")
            newSquare.setAttribute("style", widthHeightString + "background:black; opacity: 0.0")
            newRow.appendChild(newSquare)
        }
    }
    setEventListeners(widthHeightString)
    inputBox.focus()
}

generateGrid(4)
generateButton.addEventListener("click", () => {
    integer = parseInt(inputBox.value)
    if (isNaN(integer)) {
        console.log("Not a number")
    } else {
        generateGrid(integer)
    }
})


// console.log(inputSideLength)

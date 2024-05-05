const generateButton = document.querySelector("#generate")
const inputBox = document.querySelector("#length")
const gridDiv = document.querySelector(".gridDiv")

function setEventListeners(widthHeightString) {
    const squares = document.querySelectorAll(".square")
    for (i = 0; i < squares.length; i++) {
        let currentSquare = squares[i]
        squares[i].addEventListener("mouseover", () => {
            let backgroundStyle = getRandomColorStyle()
            currentSquare.setAttribute("style", backgroundStyle + widthHeightString)
        })
        2
        squares[i].addEventListener("mouseout", () => {
            currentSquare.setAttribute("style", "background: white;" + widthHeightString)
        })

    }
}

function getRandomColorStyle() {
    color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    return `background: ${color};`
}

function generateGrid() {
    const sideLength = (inputBox.value)
    if (sideLength > 100) {
        return window.alert("Input a number less than 100")
    }
    gridDiv.innerHTML = ""
    let widthHeightString = `width : ${600/sideLength}px; height: ${600/sideLength}px`
    console.log(widthHeightString)
    for (i = 0; i < sideLength; i++) {
        let newRow = document.createElement("div")
        newRow.setAttribute("class", "rows")
        gridDiv.appendChild(newRow)
        for (j = 0; j < sideLength; j++) {
            newSquare = document.createElement("div")
            newSquare.setAttribute("class", "square")
            newSquare.setAttribute("style", widthHeightString)
            newRow.appendChild(newSquare)
        }
    }
    setEventListeners(widthHeightString)
    inputBox.focus()
}

generateButton.addEventListener("click", generateGrid)

inputBox.focus()
setEventListeners()
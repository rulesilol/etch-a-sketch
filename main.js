const squares = document.querySelectorAll(".square")
const generateButton = document.querySelector("#generate")
const inputBox = document.querySelector("#length")
const gridDiv = document.querySelector(".gridDiv")

for (i = 0; i < squares.length; i++) {
    const currentSquare = squares[i]
    squares[i].addEventListener("mouseover", () => {
        // console.log("Hello")
        currentSquare.setAttribute("style", "background: blue;")
    })
    2
    squares[i].addEventListener("mouseout", () => {
        currentSquare.setAttribute("style", "background: white")
    })

}

generateButton.addEventListener("click", generateGrid)

function generateGrid() {
    const sideLength = (inputBox.value)
    for (i = 0; i < sideLength; i++) {
        let newRow = document.createElement("div")
        
        for (j = 0; j < sideLength; j ++) {

        }
    }
}
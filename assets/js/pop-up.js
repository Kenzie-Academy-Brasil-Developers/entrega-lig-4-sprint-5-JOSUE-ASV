
function popUpOne(){
    const body     = document.querySelector("body")
    const div      = document.createElement("div")
    div.className  = "popUpPlayer1"

    const paragraph     = document.createElement("p")
    paragraph.innerText = `parabéns, ${} você venceu!`

    const button     = document.createElement('button')
    button.className = "resetButton"
    button.innerText = "Jogar novamente!"
    button.type      = "reset"

    div.appendChild(paragraph)
    div.appendChild(button)
    body.appendChild(div)
}
popUpOne()

function popUpTwo(){
    const body      = document.querySelector("body")
    const div       = document.createElement("div")
    div.className   = "popUpPlayer2"

    const paragraph     = document.createElement("p")
    paragraph.innerText = `parabéns, ${} você venceu!`

    const button     = document.createElement('button')
    button.className = "resetButton"
    button.innerText = "Jogar novamente!"
    button.type      = "reset"

    div.appendChild(paragraph)
    div.appendChild(button)
    body.appendChild(div)
}
popUpTwo()

function popUpDraw(){
    const body     = document.querySelector("body")
    const div      = document.createElement("div")
    div.className  = "popUpDraw"

    const paragraph     = document.createElement("p")
    paragraph.innerText = "\"Wubba lubba dub dub!\" Deu empate!"

    const button     = document.createElement('button')
    button.className = "resetButton"
    button.innerText = "Jogar novamente!"
    button.type      = "reset"

    div.appendChild(paragraph)
    div.appendChild(button)
    body.appendChild(div)
}
popUpDraw()


//substituir o alert
//tem que ter um para o B, um para o R e um para empate
//if adiciona uma classe

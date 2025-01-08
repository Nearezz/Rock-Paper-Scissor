const choices = document.querySelectorAll(".choice")
const playerChoiceIcon = document.querySelector("#playerIcon")
const computerChoiceIcon = document.querySelector("#computerIcon")

let round = 0 
let playerScore = 0
let computerScore = 0


const imgSrc = new Map([
    ["paper","http://127.0.0.1:5500/src/Images/paper.png"],
    ["rock","http://127.0.0.1:5500/src/Images/rock.png"],
    ["scissors","http://127.0.0.1:5500/src/Images/scissors.png"]
])





function getComputerChoice() {
    choicesForComputer = ["rock","paper","scissors"]
    randomChoice = Math.floor(Math.random()*choicesForComputer.length)
    return choicesForComputer[randomChoice]
}

const choiceValues = new Map([
    ["rock",0],
    ["paper",1],
    ["scissors",2]
])

const fourmula = (a,b) => (3+(b-a))%3




const outcomeHandlers  = new Map([
    [2, () => {
        playerScore++
        const container = document.querySelector("#container");
        const winnerTitle = document.querySelector("h1");
        winnerTitle.textContent = "Player Wins";
        const score = document.querySelector("#playerTag")
        score.textContent = playerScore

    }],
    [1, () => {
        computerScore++
        const container = document.querySelector("#container");
        const winnerTitle = document.querySelector("h1");
        winnerTitle.textContent = "Computer Wins";
        const score = document.querySelector("#computerTag")
        score.textContent = computerScore
    }],
    [0, () => {
        const container = document.querySelector("#container");
        const winnerTitle = document.querySelector("h1");
        winnerTitle.textContent = "Nobody Wins";
    }],
]);



function roundWinner(plr,comp) {  
    const plrVal = choiceValues.get(plr)
    const compVal = choiceValues.get(comp)

    const roundWinner = fourmula(plrVal,compVal)
    console.log(roundWinner,plrVal,compVal)
    outcomeHandlers.get(roundWinner)()    
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (round === 5) {
           alert("Round is over")
        }

        round++
        const img = choice.querySelector("img")
        const computerChoice = getComputerChoice()
        const playerChoice = img.alt

        playerChoiceIcon.src = img.src
        computerChoiceIcon.src = imgSrc.get(computerChoice)

        roundWinner(playerChoice,computerChoice)

    })
})


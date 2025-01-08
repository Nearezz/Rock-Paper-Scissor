const choices = document.querySelectorAll(".choice")
const playerChoiceIcon = document.querySelector("#playerIcon")
const computerChoiceIcon = document.querySelector("#computerIcon")

let PlayerScore = 0
let computerScore = 0

let playerAndComputerChoice = []

const imgSrc = new Map([
    ["paper","http://127.0.0.1:5500/src/Images/paper.png"],
    ["rock","http://127.0.0.1:5500/src/Images/rock.png"],
    ["scissors","http://127.0.0.1:5500/src/Images/scissors.png"]
])



let fourmula = (a,b) => (b-a)%3

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




const outcomeHandlers  = new Map([ //make this into function see where code is repeating you are tired right now go to sleep.
    [2, () => {
        const container = document.querySelector("#container");
        const winnerTitle = document.querySelector("h1");
        winnerTitle.textContent = "Player Wins";
        const score = document.querySelector("playerTag")
    }],
    [1, () => {
        const container = document.querySelector("#container");
        const winnerTitle = document.querySelector("h1");
        winnerTitle.textContent = "Computer Wins";
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
    outcomeHandlers.get(roundWinner)()
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const img = choice.querySelector("img")

        const computerChoice = getComputerChoice()
        const playerChoice = img.alt

        playerChoiceIcon.src = img.src
        computerChoiceIcon.src = imgSrc.get(computerChoice)

        roundWinner(playerChoice,computerChoice)



    })
})


const choices = document.querySelectorAll(".choice")
const playerChoiceIcon = document.querySelector("#playerIcon")
const computerChoiceIcon = document.querySelector("#computerIcon")
const popup = document.querySelector(".popup")
const popUpButton = document.querySelector("#popUpButton")
const popUpText = document.querySelector("#popUpText")

let round = 0 
let playerScore = 0
let computerScore = 0


const imgSrc = new Map([
    ["paper","http://127.0.0.1:5500/src/Images/paper.png"],
    ["rock","http://127.0.0.1:5500/src/Images/rock.png"],
    ["scissors","http://127.0.0.1:5500/src/Images/scissors.png"]
])


function showPopUp() {
    popup.style.display = 'flex'

    setTimeout(() => {
        popUpButton.classList.remove('hide')
        popUpButton.classList.add('show')
    },10)
}

function hidePopUp() {
    popup.classList.remove('show')
    popup.classList.add('hide')

    setTimeout(() => {
        popup.style.display = 'none'
    },100)
}





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

popUpButton.addEventListener("click", () => {
    location.reload()
    hidePopUp()

    if (playerScore>computerScore) {
        popUpText.textContent = "You Win"
    } else if (playerScore === computerScore) {
        popUpText.textContent = "Draw"
    } else {
        popUpText.textContent === "You Lose"
    }
})

function roundWinner(plr,comp) {  
    const plrVal = choiceValues.get(plr)
    const compVal = choiceValues.get(comp)
    const roundWinner = fourmula(plrVal,compVal)
    outcomeHandlers.get(roundWinner)()    
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log(round)
        if (round === 3) {
          showPopUp()
        } else 
        {
            round++
            const img = choice.querySelector("img")
            const computerChoice = getComputerChoice()
            const playerChoice = img.alt

            playerChoiceIcon.src = img.src
            computerChoiceIcon.src = imgSrc.get(computerChoice)

            roundWinner(playerChoice,computerChoice)
        }

    })
})


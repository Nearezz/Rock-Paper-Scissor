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



const winnerArray = [["rock","scissors"],["scissors","paper"],["paper","rock"]]


function getComputerChoice() {
    choicesForComputer = ["rock","paper","scissors"]
    randomChoice = Math.floor(Math.random()*choicesForComputer.length)
    return choicesForComputer[randomChoice]
}


const uIChangeMap = new Map([
    ["player", () => {
        const container = document.querySelector("#container");
        const winnerTitle = document.querySelector("h1");
        winnerTitle.textContent = "Player Wins";
    }],
    ["computer", () => {
        const container = document.querySelector("#container");
        const winnerTitle = document.querySelector("h1");
        winnerTitle.textContent = "Computer Wins";
    }],
    ["draw", () => {
        const container = document.querySelector("#container");
        const winnerTitle = document.querySelector("h1");
        winnerTitle.textContent = "Nobody Wins";
    }],
]);



function roundWinner(choiceArr) {
    console.log(
        winnerArray.some((pair) => pair[0] === choiceArr[0] && pair[1] === choiceArr[1])
    );
    if (winnerArray.some((pair) => pair[0] === choiceArr[0] && pair[1] === choiceArr[1])) {
        uIChangeMap.get("player")();
    } else if (choiceArr[0] === choiceArr[1]) {
        uIChangeMap.get("draw")();
    } else {
        uIChangeMap.get("computer")();
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        choiceArray = []
        const img = choice.querySelector("img")
        const computerChoice = getComputerChoice()
        const playerChoice = img.alt
        playerChoiceIcon.src = img.src
        computerChoiceIcon.src = imgSrc.get(computerChoice)
        choiceArray.push(playerChoice,computerChoice)
        roundWinner(choiceArray)

    })
})


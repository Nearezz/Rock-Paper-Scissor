let humanScore = 0 
let computerScore = 0

function getComputerChoice() {
    choices = ["rock","paper","scissor"]
    randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice]
}

function getHumanChoice() {
    let humanChoice = prompt("Rock Paper or Scissor?!")
    return humanChoice
}




function playRound(humanChoice,computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    console.log(humanChoice, computerChoice)
    if (humanChoice === computerChoice) {
        console.log("Nobody won")
    } else if (humanChoice === "rock" && computerChoice !== "paper") {
        console.log("You win congrats")
        humanScore +=1 
    } else if (humanChoice === "paper" && computerChoice !== "scissor") {
        console.log("You win congrats")
        humanScore +=1 
    } else if (humanChoice === "scissor" && computerChoice !== "rock") {
        console.log("You win congrats")
        humanScore +=1 
    } else {
        console.log("You lose loser")
        computerScore +=1
    }

}

function Round() {
    let Winner = "Nobody"
    for (let i = 0; i<=5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection)
        console.log(humanScore," ",computerScore)
    }

    if (computerScore > humanScore) {
        Winner = "Computer"
    } else {
        Winner = "Human"
    }

    let rePlay =  prompt("The Winner was " + Winner + " Would you like to play again?")

    if (rePlay.toLowerCase === "yes") {
        Round()
    } else {
        alert("ok Goodbye")
    }
}

Round()




const choices = document.querySelectorAll(".choice")
const playerChoiceIcon = document.querySelector("#playerIcon")
const computerChoiceIcon = document.querySelector("#computerIcon")

const imgSrc = new Map([
    [0,"http://127.0.0.1:5500/src/Images/paper.png"],
    [1,"http://127.0.0.1:5500/src/Images/rock.png"],
    [2,"http://127.0.0.1:5500/src/Images/scissors.png"]
])

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const img = choice.querySelector("img")
        console.log(img.src)
        playerChoiceIcon.src = img.src
        computerChoiceIcon.src = imgSrc.get(Math.floor(Math.random()*3))

    })
})


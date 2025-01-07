const choices = document.querySelectorAll(".choice")
const playerChoiceIcon = document.querySelector("#playerIcon")


choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        const img = choice.querySelector("img")
        console.log(img)

        playerChoiceIcon.src = img.src


    })
})


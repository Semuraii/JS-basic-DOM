// Array for Killers

const killers = [
    {
        name: "Trapper",
        image: "images/trapper.png",
        weapon: "Bjørnefelle",
        difficulty: "Lett"
    },

    {
        name: "Huntress",
        image: "images/huntress.png",
        weapon: "Øks",
        difficulty: "Medium"
    },

    {
        name: "Nurse",
        image: "images/nurse.png",
        weapon: "Blink",
        difficulty: "Vanskelig"
    }
]

// Array for Survivors

const survivors = [
    {
        name: "Dwight Fairfield",
        image: "images/Dwight_Fairfield1.webp"
    },

    {
        name: "Claudette Morel",
        image: "images/Claudette_Morel1.webp"
    },

    {
        name: "Meg Thomas",
        image: "images/Meg_Thomas1.webp"
    }
]

// Dom elements

const generateBtn = 
document.querySelector("#generate-btn")

const resetBtn =
document.querySelector("#reset-btn")

const clearHistoryBtn =
document.querySelector("#clear-history-btn")

const historyContainer = 
document.querySelector("#history")

const matchResult = 
document.querySelector("#result")

// Button event

generateBtn.addEventListener(
    "click",
    generateMatch
)

resetBtn.addEventListener("click",
    resetGenerator)

    function resetGenerator() {
        matchResult.innerHTML = ""
    }

    clearHistoryBtn.addEventListener("click",
        clearHistory
    )

    function clearHistory() {
        historyContainer.innerHTML = ""
    }


// History container
const history = document.querySelector("#history")

function addHistoryItem(killer, survivor) {
    const historyItem = document.createElement("p")
    historyItem.textContent = `${killer.name} vs ${survivor.name}`
    history.appendChild(historyItem)
}

function generateMatch() {
    const randomKiller = killers[Math.floor(Math.random() * killers.length)]
    const randomSurvivor = survivors[Math.floor(Math.random() * survivors.length)]

    matchResult.innerHTML = `
        <div class="match-card">
            <img src="${randomKiller.image}" alt="${randomKiller.name}" />
            <h2>Killer: ${randomKiller.name}</h2>
            <p>Weapon: ${randomKiller.weapon}</p>
            <p>Difficulty: ${randomKiller.difficulty}</p>
            <img src="${randomSurvivor.image}" alt="${randomSurvivor.name}" />
            <h2>Survivor: ${randomSurvivor.name}</h2>
        </div>
    `

    addHistoryItem(randomKiller, randomSurvivor)
} 

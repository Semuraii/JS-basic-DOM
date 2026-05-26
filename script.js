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
document.querySelector("#generateBtn")

const matchResult = 
document.querySelector("#matchResult")

// Button event

generateBtn.addEventListener(
    "click",
    generateMatch
)

// Function

function generateMatch()

// Random Killer
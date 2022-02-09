document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
                let topicChoice = this.getAttribute("data-type");
                randomWord(topicChoice);
            });
    }

});
let football = [
    "Arsenal",
    "Manchester United",
    "Manchester City",
    "Leicester",
    "Chelsea",
    "Tottenham",
    "Aston Villa",
    "Wolves",
    "Liverpool",
]
let actors = [
    "Dwayne Johnson",
    "Robert Downey Jr",
    "Chris Hemsworth",
    "Chris Evans",
    "Scarlett Johansen",
    "Al Pacino",
    "Cilian Murphy"
]
let capitals = [
    "London",
    "Madrid",
    "Paris",
    "Washington D.C",
    "Moscow",
    "Beijing",
    "Mumbai",
    "Dhaka",
    "Berlin",
]

let answer = "";
let errors = [];
let correctLetters = [];
let word = document.getElementById(answer);
let won= "You Won! Well Done"
//choosing the random word
function randomWord() {
    answer = football[Math.floor(Math.random() * football.length)];
    //alert(answer);
    }
//hiding the randwom word    
function chosenWord() {
    word.innerHTML = `
    ${randomWord.split("").map(
        (letter) => `
            <span class="letter">
            ${correctLetters.includes(letter) ? letter: ""} </span>`)
        .join("")}`;
    let hiddenWord = word.innerText.replace(/\n/g, "");
    if (hiddenWord === randomWord) {
    alert(won);
    }
}
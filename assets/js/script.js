document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
                let topicChoice = this.getAttribute("data-type");
                randomWord(topicChoice);
            });
    }

});
const football = [
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
const actors = [
    "Dwayne Johnson",
    "Robert Downey Jr",
    "Chris Hemsworth",
    "Chris Evans",
    "Scarlett Johansen",
    "Al Pacino",
    "Cilian Murphy"
]
const capitals = [
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
let maxAttempts = "10";
let errors = "0";
let numberOfAttempts = [];

function randomWord (topicChoice) {
    if (topicChoice === football) {
        answer = football[Math.floor(Math.random() * football.length)]
    } else if (topicChoice === actors) {
        answer = football[Math.floor(Math.random() * actors.length)]
    } else if (topicChoice === capitals) {
        answer = capitals[Math.floor(Math.random() * capitals.length)]
    } else {
        alert(`Unknown topic : ${topicChoice}`);
        throw `Unknown topic : ${topicChoice}. Please Refresh`;
    }
    alert = answer;
}



//create alphabet
let alphabet = function () {
    theAlphabet = document.getElementById("alphabet");
    letters = document.createElement("ul");
    for (let i=0; i < alphabet.length; i++);

}
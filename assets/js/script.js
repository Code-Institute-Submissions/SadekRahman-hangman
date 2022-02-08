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
        answer = football[Math.floor(math.random() * football.length)]
    } else if (topicChoice === actors) {
        answer = football[Math.floor(math.random() * actors.length)]
    } else if (topicChoice === football) {
        answer = capitals[Math.floor(math.random() * capitals.length)]
    } else {
        alert(`Unknown topic : ${topicChoice}`);
        throw `Unknown topic : ${topicChoice}. Please Refresh`;
    }
}



//create alphabet
let alphabet = function () {
    theAlphabet = document.getElementById("alphabet");
    letters = document.createElement("ol");
    for (let i=0; i < alphabet.length; i++);

}
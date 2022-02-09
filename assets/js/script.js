//variables from HTMl page
const answer = "";
const clueEl = document.getElementById("clue");
const guesses = [];
const maxIncorrectLetters = 10;
const incorrectLetters = 0;
const wordStatus = null;

//array of words
const words = [
    "Arsenal",
    "Manchester United",
    "Manchester City",
    "Leicester",
    "Chelsea",
    "Tottenham",
    "Aston Villa",
    "Wolves",
    "Liverpool",
    "Dwayne Johnson",
    "Robert Downey Jr",
    "Chris Hemsworth",
    "Chris Evans",
    "Scarlett Johansen",
    "Al Pacino",
    "Cilian Murphy",
    "London",
    "Madrid",
    "Paris",
    "Washington D.C",
    "Moscow",
    "Beijing",
    "Mumbai",
    "Dhaka",
    "Berlin"
]
//array of corresponding clues
const clues = [
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Football Team",
    "Actor",
    "Actor",
    "Actor",
    "Actor",
    "Actress",
    "Actor",
    "Actor",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
    "Capital City",
]
//variable to track performance
const correctLetters = [];
const incorrectLetters = [];

//choosing the random word
function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
    alert(answer);
}

//showing the chosen word   
function showWord() {
    gameFinish = false;
    wordSpotlight.innerHTML = `
    ${chosenWord.split('').map(
        function (letter) {
            return `
            <span class="letter">
            ${correctLetters.includes(letter) ? letter : ""} </span>`;
        })
        .join("")}`;
    let hiddenWord = word.innerText.replace(/\n/g, "");
    if (hiddenWord === randomWord) {
        alert(won);
    }
}
runGame;
showWord;
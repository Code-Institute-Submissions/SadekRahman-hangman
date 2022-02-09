//variables from HTMl page
let answer = "";
let clueEl = document.getElementById("clue");
let guesses = [];
let maxIncorrectLetters = 10;
let incorrectLetters = 0;
let wordStatus = null;

//array of words
let football_actor_capitals = [
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
let clues = [
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
//const correctLetters = [];

//choosing the random word
function randomWord() {
    answer = football_actor_capitals[Math.floor(Math.random() * football_actor_capitals.length)];
    alert(answer);
  }

//generating an interactive keyboard
function generateKeyboard() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
    <button id = '${letter}'
    onClick = 'decideChoice("${letter}') >
    ${letter}
    </button>
    `).join('');
    document.getElementById("keyboard").innerHTML = buttonsHTML;
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
randomWord();
generateKeyboard();
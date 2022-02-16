//variables
let wordEl = document.getElementById("word");
let clueEl = document.getElementById("clue");
let incorrectLettersEl = document.getElementById("incorrect-letters");

//array of words
let words = [
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
//event listener needed for click on "Begin" to initiate Game
//choosing the random word with clue - perhaps need some rewriting - need to do same index of two different arrays
function runGame(words,clues) {
    let randomNumber = Math.floor(Math.random());
    let chosenWord = randomNumber * words.length;
    let chosenCLue = randomNumber * clues.length;
    generateKeyboard();
    showWord();
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

//storing of letters as an array
const correctLetters = [];
const incorrectLetters = [];

//showing the chosen word   
function showWord(chosenCLue,chosenWord) {
    //chosen word hidden display
    wordEl.innerHTML = `
        ${chosenWord
        .split('')
        .map(
          (letter) => `
            <span class="letter">
              ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `)
        .join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g,'');

    //show clue
    clueEl.innerHTMl = (`<p>Clue:${chosenCLue}</p>`);
}

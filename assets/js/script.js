//variables
let wordEl = document.getElementById("word");
let clueEl = document.getElementById("clue");
let incorrectLettersEl = document.getElementById("incorrect-letters");

let figureParts = document.querySelectorAll(".figure-part");

let gameFinish = true;

let chosenWord;
let chosenCLue;

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
function runGame() {
 
    let randomNumber = Math.floor(Math.random());
    chosenWord = randomNumber * words.length;
    chosenCLue = randomNumber * clues.length;

    //Set no-display on hangman figure
    $('.figure.part').css('display', 'none');
    
    showWord();
    generateKeyboard();
}
//showing the chosen word   
function showWord(chosenCLue,chosenWord) {
    gameFinish = false;

    //show clue
    clueEl.innerHTMl = (`<p>Clue:${chosenCLue}</p>`);
    
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

    //check if game is won
    if (innerWord === chosenWord) {
        gameFinish = true;

        $('#final-message-text').html("Correct! Winninggg");

    }

    
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



//updating and showing the incorrect letters
function updateIncorrectLettersEl () {
    
    incorrectLettersEl.innerHTML = `
    ${incorrectLetters.length > 0 ? "<h4>Incorrect Attempts</h4>":""}
    ${incorrectLetters.map((letter) => {
        return `<span>${letter}</span>`;
    })}`

}
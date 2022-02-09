//variables from HTMl page
const answerEl = document.getElementbyId("answer");
const clueEl = document.getElementbyId("clue");
const incorrectLettersEl = document.getElementbyId("incorrect-letters");
const restart = document.getElementbyId("restart");

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
    "Actress".
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

let gameFinish = true;


//choosing the random word
function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
    alert(answer);
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
randomWord;
chosenWord;
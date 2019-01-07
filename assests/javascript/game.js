//declare global variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var gameArray = [{name: "alex", image: "assests/images/alex_icon.png"},{name: "gloria", image: "assests/images/gloria_icon.png"}, {name: "julien", image: "assests/images/julien_icon.png"},
                {name: "kowalski", image: "assests/images/kowalski_icon.png"}, {name: "marty", image: "assests/images/marty_icon.png"}, {name: "maurice", image: "assests/images/maurice_icon.png"},
                {name: "melman", image: "assests/images/melman_icon.png"}, {name: "mort", image: "assests/images/mort_icon.png"}, {name: "private", image: "assests/images/private_icon.png"},
                {name: "rico", image: "assests/images/rico_icon.png"}, {name: "skipper", image: "assests/images/skipper_icon.png"}]
  

var generateRandom = Math.floor(Math.random() * gameArray.length);
var game = gameArray[generateRandom].name;
var gameImage = gameArray[generateRandom].image
var lettersLeft = game.length;
var answerArray = []; 
var hasStarted = false;  


function playGame() {
    hasStarted = true;
    generateRandom = Math.floor(Math.random() * gameArray.length);
    
    game = gameArray[generateRandom].name;
    gameImage = gameArray[generateRandom].image

    lettersLeft = game.length;

     answerArray = []; 

    for(var i = 0; i < game.length; i++) {
        if (game[i] === "+") {
            answerArray[i] = "&nbsp;"; //no breaking space
        } else {
            answerArray[i] = "_";
        }
    }

    lettersLeft = game.length;
    guessesLeft = 9;
    showGuessesLeft()
    incorrectAtt = []; 
    showGuessesAtt()
    showCurrentWord();
    showImage();
}

var winNum = 0;
function correctGuessCheck(guess) {
    if(game.indexOf(guess.key) > -1) {
        correctGuess(guess);
    }else {
        incorrectGuess(guess);
    }
}

function correctGuess(guess) {
    if(answerArray.indexOf(guess.key.toUpperCase()) < 0) {
        addCorrectLetter(guess);
    }
}
// adding counter needed here
function addCorrectLetter(guess) {
    for(var j = 0; j < game.length; j++) {
        if (guess.key === game[j]) {
            answerArray[j] = guess.key.toUpperCase();
            showCurrentWord();
            lettersLeft--;
            if (lettersLeft === 0) {
                winNum++;
                showWins();
                nextImage();
                addCorrect();
                showCurrentWord();
            }
        }
    }
}

var incorrectAtt = [];
var guessesLeft = 9;
var lossNum = 0;

function incorrectGuess(guess) {
    if(incorrectAtt.indexOf(guess.key.toUpperCase()) < 0) {
        addIncorrectLetter(guess);
    }
}

function addIncorrectLetter(guess) {
    incorrectAtt.push(guess.key.toUpperCase());
    showGuessesAtt();
    guessesLeft--;
    showGuessesLeft();
    if(guessesLeft === 0) {
        lossNum++;
        showLosses();
        nextImage();
        displayAnswer();
    }
}
// for using in html 

function showWins() {
    var showWins = document.querySelector("#showWins");
    showWins.textContent = winNum;
}
function showLosses() {
    var showLosses = document.querySelector("#showLosses"); // same idea as wins
    showLosses.textContent = lossNum;
}
function showGuessesAtt() {
    var showGuessesAtt = document.querySelector("#showGuessesAtt");
    showGuessesAtt.textContent = incorrectAtt.join(", ");
}

function showGuessesLeft() {
    var showGuessesLeft = document.querySelector("#showGuessesLeft");
    showGuessesLeft.textContent = guessesLeft;
}

function showCurrentWord() {
    var showCurrentWord = document.querySelector("#showCurrentWord");
    showCurrentWord.innerHTML = answerArray.join(" ");
}

function showImage() {
    var showPicture = document.querySelector("#showPicture");
    showPicture.src = gameImage;
}

function nextImage() {
    var showPicture = document.querySelector("#showPicture");
    hasStarted = false;
}
function addCorrect() {
    var showCurrentWord = document.querySelector("#showCurrentWord");
    showCurrentWord.classList.add('correct');
}

//try this again

document.addEventListener("keyup", function(event){
  
    if(hasStarted) {
        letterCheck(event);
    } else {
        playGame();
    }
});

function letterCheck(guess) {
    if(alphabet.indexOf(guess.key) > -1) {
        correctGuessCheck(guess);
    }
}
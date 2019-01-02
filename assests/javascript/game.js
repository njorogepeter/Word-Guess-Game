var looneyCharacters = ["ORANGE JUSTICE", "TIDY", "FLAPPER", "ZANY", "ELECTRO SHUFFLE", "BEST MATES", "THE WORM", "REANIMATED", "THE ROBOT"];
var totalGuesses = 9; // number of tries
var userGuess = []; 
var computerPick;
var wordGuesed = [];
var guessesLeft = 0;
var end = false; 
var wins = 0;
var losses = 0;

function startGame() {
    guessLeft = totalGuesses;
    computerPick = Math.floor(Math.random()* (looneyCharacters.length));

    if(looneyCharacters[computerPick] == looneyCharacters[0]){
        //orange justice
        
    }else if(looneyCharacters[computerPick] == looneyCharacters[1]){
        // tidy
    }else if(looneyCharacters[computerPick] == looneyCharacters[2]){
        // flapper
    }else if(looneyCharacters[computerPick] == looneyCharacters[3]){
        // zany
    }else if(looneyCharacters[computerPick] == looneyCharacters[4]){
        // electro shuffle
    }else if(looneyCharacters[computerPick] == looneyCharacters[5]){
        // best mates
    }else if(looneyCharacters[computerPick] == looneyCharacters[6]){
        // the worm
    }else if(looneyCharacters[computerPick] == looneyCharacters[7]){
        // reanimated
    }else if(looneyCharacters[computerPick] == looneyCharacters[8]){
        // the robot
    }else if(looneyCharacters[computerPick] == looneyCharacters[9]){
        // boneless
    }else if(looneyCharacters[computerPick] == looneyCharacters[10]){
        // ride the pony
    }else if(looneyCharacters[computerPick] == looneyCharacters[11]){
        // floss
    }else('.clue').text('neither of these');
        
}
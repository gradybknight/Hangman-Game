var userGuesses = [];       // letters already guessed that are wrong
var userCurrentGuess="";    // current letter.  need to trap to Upper
var allowedGuesses=10;      // allowed # of wrong guesses
var remainingAlphabet = [];
var isGoodGuess=false;
var isMatchedLetter = false;
var displayString=""
var whereDoesGuessedLetterMatch=[];

//NEED TO REWRITE THIS USING AN OBJECT{ARRAY WHERE LETTER MATCHES, LETTER_GUESS}


function PopulateStartingAlphabet(){
	// for loop 0-25 to populate upper alphabet --> remaining alphabet
	for (var i=0; i<25;i++){
		remainingAlphabet.push(string.fromCharCode(65+i));
	}
	return remainingAlphabet;
}

function PopulateListOfMammals(){
	// populate array with list of animal names
	var longListOfMammals=["cow", "goat", "donkey", "monkey"];
	return longListOfMammals;
}

function ChooseMammalFromList(){
	// pick random word from array. assign to theWord
	var theWord=longListOfMammals[Math.floor(Math.random*longListOfMammals.length)];
}

function PopulateStartingStringOfBlanks(){
	// populate string of '_' of appropriate length
	for (i=0; i<theWord.length;i++){
		displayString=displayString.push("_");
	}
}

function IsLetterInAlphabet(x){
	if ("A"<= x && x<="Z"){
		return true;
	} else
		return false;
	}
}



// loop until guessed more than allowable guesses
do {
	userCurrentGuess = prompt("What letter?");
	userCurrentGuess=userCurrentGuess.toUpperCase();
	isGoodGuess=true;
	
	// trap to make sure guess is in alphabet
	if (IsLetterInAlphabet(userCurrentGuess)){
		isGoodGuess=true;
	} else {
		isGoodGuess=false;
	}

	// trap to make sure guess is new.  
	for (var i=0;(i<userGuesses.length && isGoodGuess);i++){
		if (userCurrentGuess==userGuesses[i]) {
			isGoodGuess=false;
		} 
	}

	if (isGoodGuess) {
		/* see if user guess is in theWord */
		isMatchedLetter=false;
		for (var i=0; i<theWord.length; i++){
			if (userCurrentGuess==theWord[i]){
				whereDoesGuessedLetterMatch.push(i);
				isMatchedLetter=true;
			}
		}

		if (!isMatchedLetter) {
			userGuesses.push(userCurrentGuess);
		} else {
			// write letter to displayString
			for (var i=0;i<whereDoesGuessedLetterMatch.length;i++){
				displayString[whereDoesGuessedLetterMatch[i]]=whereDoesGuessedLetterMatch[i];
			}
			// remove letter from remaining alphabet
			for (var i=0;i<remainingAlphabet.length;i++){
				if (remainingAlphabet[i]==userCurrentGuess){
					remainingAlphabet.slice(i,1);
				}
			}
			// remove letter from userGuesses

		}
	}
} while (userGuesses.length <= allowedGuesses);

// this is snipped code to get user input key:
// document.onkeyup = function(event) {
// var userInput = event.key;
// rest of logic;
// }
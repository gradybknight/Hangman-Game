var userGuesses = [];       // letters already guessed that are wrong
var userCurrentGuess="";    // current letter.  need to trap to Upper
var allowedGuesses=10;      // allowed # of wrong guesses
var remainingAlphabet = [];
var isGoodGuess=false;
var isMatchedLetter = false;
var displayString=""


// for loop 0-25 to populate upper alphabet --> remaining alphabet


// populate array with list of animal names


// pick random word from array. assign to theWord
var theWord="monkey"; //placeholder until above gets done
for (i=0; i<theWord.length;i++){
	displayString=displayString.push("_");
}

// loop until guessed more than allowable guesses
do (until userGuesses.length >= allowedGuesses){
	
	userCurrentGuess = prompt("What letter?");
	userCurrentGuess=userCurrentGuess.touppercase();
	isGoodGuess=true;
	
	// trap to make sure guess is in alphabet

	// trap to make sure guess is new.  
	for (var i=0;(i<userGuesses.length && isGoodGuess);i++){
		if (userCurrentGuess==userGuesses[i]) {
			isGoodGuess=false;
		} 
	}

	/* see if user guess is in theWord */
	isMatchedLetter=false;
	for (var i=0; i<theWord.length && !isMatchedLetter;i++){
		if (userCurrentGuess==theWord[i]){
			isMatchedLetter=true;
		}
	}
	if (!isMatchedLetter) {
		userCurrentGuess.push(userCurrentGuess);
	} else {
		// write letter to displayString
		// remove letter from remaining alphabet
		// remove letter from userGuesses
	}

}
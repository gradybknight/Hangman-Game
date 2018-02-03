var userCurrentGuess="";    // current letter.  need to trap to Upper
var allowedGuesses=7;      // allowed # of wrong guesses (head, neck, 2xarm, body, 2xleg)
var remainingAlphabet = [];
var isMatchedLetter = false;
var displayString=""
var theWord=""
var longListOfMammals=[];
var ctrBadGuesses=0;
var isUserWinner=false;

//Questions
// Declared remainingAlphabet as variable at the script level.  Is this treated as global?  Can I change it inside a function?

function PopulateStartingAlphabet(){
	// for loop 0-25 to populate upper alphabet --> remaining alphabet
	for (var i=0; i<25;i++){
		remainingAlphabet.push(string.fromCharCode(65+i));
	}
}


function PopulateListOfMammals(){
	// populate array with list of animal names
	var longListOfMammals=["cow", "goat", "donkey", "monkey"];
}

function ChooseMammalFromList(){
	// pick random word from array. assign to theWord
	var theWord=longListOfMammals[Math.floor(Math.random*longListOfMammals.length)].toUpperCase();
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
	} else{
		return false;
	}
}

function IsNewLetter(theLetter){
	for (var i=0; i<remainingAlphabet.length; i++){
		if (theLetter==remainingAlphabet[i]){
			return false;
			break;
		} else {
			return true;
		}
	}
}

function RemoveLetterFromAlphabet(theLetter){
	for (var i=0; i<remainingAlphabet.length; i++){
		if (theLetter == remainingAlphabet[i]) {
			remainingAlphabet.splice(i,1);
			break;
		}
	}
}

function IsAllBlanksRemoved(){
	for (var i=0;i<displayString.length;i++){
		if (displayString[i]=="_"){
			return true;
			break;
		}
	}
	return false;
}

PopulateListOfMammals;
ChooseMammalFromList;
PopulateStartingStringOfBlanks;
PopulateStartingAlphabet;
console.log(theWord);
console.log(displayString);
ctrBadGuesses=0;


// loop until guessed more than allowable guesses
do {
	userCurrentGuess = prompt("What letter?");                                   		//Get the user's letter
	userCurrentGuess=userCurrentGuess.toUpperCase();									//make it uppercase
	if (IsLetterInAlphabet(userCurrentGuess) && IsNewLetter(userCurrentGuess)) {		//make sure its a letter and not used already
		isMatchedLetter=false;					
		for (var i=0; i<theWord.length;i++){											//walk through computer's word and replace blanks if matched
			if (userCurrentGuess==theWord[i]) {
				displayString[i]=userCurrentGuess;
				isMatchedLetter=true;
			}
		}
		if (!isMatchedLetter){															//increment bad guess counter if not matched
			ctrBadGuesses++;
		}
		RemoveLetterFromAlphabet;														//remove letter from non already guessed alphabet
	}
	if (IsAllBlanksRemoved) {
		isUserWinner=true;
	}
} while ((ctrBadGuesses < allowedGuesses) && !isUserWinner);

// this is snipped code to get user input key:
// document.onkeyup = function(event) {
// var userInput = event.key;
// rest of logic;
// }
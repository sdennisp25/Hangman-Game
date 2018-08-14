//GUESS THE FOOTBALL TEAM!

console.clear();
var footBall = ['raiders', 'seahawks', 'dolphins', 'patriots', 'cardinals', 'chiefs'];
var guessesLeft = 21;
var wins = 1;
var losses = 1;
var blankLines;
var guessedLetters = [];
var computerGuess;

function startGame() {
	guessesLeft = 21;
	blankLines = [];
	guessedLetters = [];
	computerGuess = footBall[Math.floor(Math.random() * footBall.length)];
console.log(computerGuess);
	for (var i = 0; i < computerGuess.length; i++) {
		blankLines.push('_');
		document.getElementById("blankLines").innerHTML = blankLines.join(' ');
	}
}


function resetGame() {

	// document.getElementById("blankLines").innerHTML = blankLines.join('_ ');
	document.getElementById("lettersGuessed").innerHTML = guessedLetters;
}

startGame();
resetGame();
document.onkeyup = function (event) {
	var userGuess = event.key;
	console.log(userGuess);
	guessedLetters.push(userGuess);
	document.getElementById("lettersGuessed").innerHTML = guessedLetters;

	// will help us locate the userGuesses letter within the computer random array
	if (computerGuess.indexOf(userGuess) > -1) {
		for (var i = 0; i < computerGuess.length; i++) {
			if (userGuess === computerGuess[i]) {
				blankLines[i] = userGuess;
			}
		}
		//will replace blankLine with userGuess
		// console.log(typeof blankLines)
		document.getElementById("blankLines").innerHTML = blankLines.join(' ');
	}
	


	if (computerGuess === blankLines.join('')) {
		alert("you win!");
		document.getElementById("wins").innerHTML = wins; wins++;
		startGame();
	}

	else {
		guessesLeft--;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
	}

	if (guessesLeft === 0) {
		alert("game over");
		document.getElementById("losses").innerHTML = losses; losses++;
		startGame();
	}



}



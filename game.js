//GUESS THE FOOTBALL TEAM!


var footBall = ['raiders', 'seahawks', 'dolphins', 'patriots', 'cardinals', 'chiefs'];
var guessesLeft = 21;
var wins = 1;
var losses = 1;
var blankLines = [];
var guessedLetters = [];

var computerGuess = footBall[Math.floor(Math.random() * footBall.length)];
console.log(computerGuess);

function startGame() {
	for (var i = 0; i < computerGuess.length; i++) {
		blankLines.push('_ ');
		console.log(blankLines);
		document.getElementById("blankLines").innerHTML = blankLines;
	}
}

function resetGame() {
	var guessesLeft = 20;
	var guessedLetters = [];
	var computerGuess = footBall[Math.floor(Math.random() * footBall.length)];
	console.log(computerGuess);
}

startGame();

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
		console.log(typeof blankLines)
		document.getElementById("blankLines").innerHTML = blankLines;
	}


	if (computerGuess === blankLines.join('')) {
		alert("you win!");
		document.getElementById("win").innerHTML = win; win++;
	}
	
	else {
		guessesLeft--;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
	}
	
	if (guessesLeft === 0) {
		alert("game over");
		document.getElementById("losses").innerHTML = losses; losses++;
		resetGame();
	}
	
	
	
}



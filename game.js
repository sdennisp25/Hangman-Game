//GUESS THE FOOTBALL TEAM!

var footBall = ['raiders', 'seahawks', 'dolphins', 'patriots', 'cardinals', 'chiefs'];
var guessesLeft = 21;
var guessedLetters = [];
var wins = 1;
var losses = 1;

var computerGuess = footBall[Math.floor(Math.random() * footBall.length)];
console.log(computerGuess);



for (var i = 0; i < computerGuess.length; i++) {
  blankLines[i] = "_ ";
	console.log(blankLines[i]);
	document.getElementById("blankLines").innerHTML = blankLines;
	blankLines.append(computerGuess[i]);
}


document.onkeyup = function (event) {
	var userGuess = event.key;
	console.log(event.key);
	guessedLetters.push(event.key);
	document.getElementById("lettersGuessed").innerHTML = guessedLetters;

	if (computerGuess.indexOf(userGuess) > -1) {
		for (var i = 0; i < 26; i++) {
			if (userGuess === computerGuess[i]) {
				blankLines--;
				
			}
		}
	}

	if (computerGuess === blankLines) {
		alert("you win!");
		document.getElementById("win").innerHTML = win; win++;
	}

	else {
		guessesLeft--;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
	}

	if (guessesLeft === 0){
		alert("game over");
		resetgame();
	}

	function resetgame() {
		var guessesLeft = 21;
		var guessedLetters = [];
		var computerGuess = footBall[Math.floor(Math.random() * footBall.length)];
console.log(computerGuess);
	}



}

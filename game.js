//GUESS THE FOOTBALL TEAM!

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var footBall = ['raiders', 'seahawks', 'dolphins', 'patriots', 'cardinals', 'chiefs'];
var guessesLeft = 21;
var guessedLetters = [];
var wins = 1;
var losses = 1;
var blankLines = [];

var computerGuess = footBall[Math.floor(Math.random() * footBall.length)];
console.log(computerGuess);




for (var i = 0; i < computerGuess.length; i++) {
	blankLines += '_ ';
	document.getElementById("blank").innerHTML = blankLines;
}



document.onkeyup = function (event) {
	var userGuess = event.key;
	console.log(event.key);
	guessedLetters.push(event.key);
	document.getElementById("lettersGuessed").innerHTML = guessedLetters;
	

	if (computerGuess.indexOf(userGuess) > -1) {

		for (var i = 0; i < 26; i++) {
			if (userGuess === computerGuess[i]) {
			
			// blankLines --;
				
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

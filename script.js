var numCircles = 6;
var colors = [];
var pickedColor;

var circles = document.querySelectorAll(".circle");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var endGameButton = document.querySelector("#endGame"); // Added this line
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");
var scoreDisplay = document.querySelector("#score-value");

var score = 0;

init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupCircles();
	setupMode();
	reset();
}


function setupCircles() {
	for (var i = 0; i < circles.length; i++) {
		circles[i].style.backgroundColor = colors[i];
		circles[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Perfect!";
				resetButton.textContent = "Play Again";
                endGameButton.style.display = "inline"; 
				changeColors(pickedColor);
                increaseScore();
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Ooops! Try again.";
			}
		});
	}
}

function setupMode() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy") {
				numCircles = 3;
			}
			else {
				numCircles = 6;
			}

            score = 0;
            scoreDisplay.textContent = score;
			reset();
		});
	}
}

function reset() {
    endGameButton.style.display = "none"; // Hide the end game button
	colors = genRandomColors(numCircles);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < circles.length; i++) {
		if(colors[i]) { 
			circles[i].style.display = "block";
			circles[i].style.backgroundColor = colors[i];
		}
		else {
			circles[i].style.display = "none";
		}
	}
}

function changeColors(color) {
	for(var i = 0; i < circles.length; i++) {
		circles[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

function makeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

function increaseScore() {
    score++;
    scoreDisplay.textContent = score;
}

function endGame() {
    score = 0;
    scoreDisplay.textContent = score;
    
    reset();
}





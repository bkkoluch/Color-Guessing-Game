var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var winningColorSpan = document.getElementById("winningColor");
var winningColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons() {
  //mode buttons event listeners:
  for (var counter = 0; counter < modeButtons.length; counter++) {
    modeButtons[counter].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "EASY" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setUpSquares() {
  for (var counter = 0; counter < squares.length; counter++) {
    //add click listeners to squares:
    squares[counter].addEventListener("click", function() {
      //grab color of the clicked square and compare to winningColor
      var clickedColor = this.style.backgroundColor;

      if (clickedColor === winningColor) {
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "PLAY AGAIN?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  resetButton.textContent = "NEW COLORS";
  messageDisplay.textContent = "";
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  winningColor = pickColor();
  //change winningColorSpan to match picked Color
  winningColorSpan.textContent = winningColor;
  h1.style.backgroundColor = "steelblue";
  //change color of squares
  for (var counter = 0; counter < squares.length; counter++) {
    if (colors[counter]) {
      squares[counter].style.display = "block";
      squares[counter].style.backgroundColor = colors[counter];
    } else {
      squares[counter].style.display = "none";
    }
    squares[counter].style.backgroundColor = colors[counter];
  }
}

function changeColors(color) {
  //loop through all squares
  for (var counter = 0; counter < squares.length; counter++) {
    squares[counter].style.backgroundColor = color;
  }
  //change each color to match given color
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(number) {
  //make an array
  var arr = [];

  //add num random colors to arr
  for (var counter = 0; counter < number; counter++) {
    //get random color and push into arr
    arr.push(randomColor());
  }

  //return array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  var randomizedColor = "rgb(" + r + ", " + g + ", " + b + ")";
  return randomizedColor;
}

resetButton.addEventListener("click", function() {
  reset();
});

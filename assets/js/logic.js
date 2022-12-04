// Grab necessary index.html document IDs
var timer = document.querySelector(".timer");
var startQuiz = document.querySelector("#start");
var questionsDiv = document.querySelector("#questions");

// Initialise variables
var score = 0;
var questionIndex = 0;

// Allow 15 seconds per question:
var secondsRemain = 75;
var interval = 0;
// Penalty is 10 seconds per wrong answer
var penalty = 10;
// Creates new ul
var ul = document.createElement("ul");

// Start quiz timer on button click. Display timer on screen
startQuiz.addEventListener("click", function () {
  if (interval === 0) {
    interval = setInterval(function () {
      secondsRemain--;
      timer.textContent = "Time: " + secondsRemain + "s";

      if (secondsRemain <= 0) {
        clearInterval(interval);
        // allDone();
        timer.textContent = "Time: 0s";
      }
    }, 1000);
  }
});

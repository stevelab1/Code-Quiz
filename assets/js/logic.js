// Grab necessary index.html document IDs
var timer = document.querySelector(".timer");
var startQuiz = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
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
        allDone();
        timer.textContent = "Time: 0s";
      }
    }, 1000);
  }
  render(questionIndex);
});

// Render questions and choices:
function render(questionIndex) {
  // Clears existing data
  startScreen.innerHTML = "";
  questionsDiv.innerHTML = "";
  ul.innerHTML = "";
  // Loop through questions array
  for (var i = 0; i < questions.length; i++) {
    // Append question title
    var currentQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = currentQuestion;
  }

  // ...question choices
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ul);
    ul.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

// Check answer
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");

    // Correct
    if (element.textContent == questions[questionIndex].answer) {
      createDiv.setAttribute("id", "createDivCorrect");
      setTimeout(() => {
        createDiv.style.display = "none";
      }, 1000); // time in milliseconds

      score++;
      createDiv.textContent =
        "Correct! The answer is:  " + questions[questionIndex].answer;
      // Incorrect
    } else {
      createDiv.setAttribute("id", "createDivIncorrect");
      setTimeout(() => {
        createDiv.style.display = "none";
      }, 1000); // milliseconds

      // Deduct 10 seconds for wrong answers
      secondsRemain = secondsRemain - penalty;
      createDiv.textContent =
        "Wrong! The correct answer is:  " + questions[questionIndex].answer;
    }
  }
  // Increment questions and check for quiz end condition, then end when met
  questionIndex++;

  if (questionIndex >= questions.length) {
    createDiv.setAttribute("id", "createDiv");
    setTimeout(() => {
      createDiv.style.display = "none";
    }, 1000); 

    allDone();
    createDiv.textContent =
      "End of quiz!" +
      " " +
      "You got  " +
      score +
      "/" +
      questions.length +
      " Correct!";
  } else {
    render(questionIndex);
  }
  questionsDiv.appendChild(createDiv);
}
// Create end screen
function allDone() {
  questionsDiv.innerHTML = "";
  timer.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "All Done!";

  questionsDiv.appendChild(createH1);

  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  questionsDiv.appendChild(createP);

  if (secondsRemain >= 0) {
    var timeRemaining = secondsRemain;
    var createP2 = document.createElement("p");
    clearInterval(interval);
    createP.textContent = "Your final score is: " + timeRemaining;

    questionsDiv.appendChild(createP2);
  }

  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your initials: ";

  questionsDiv.appendChild(createLabel);

  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";

  questionsDiv.appendChild(createInput);

  // submit
  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";

  questionsDiv.appendChild(createSubmit);

  // Event listener to instigate capture of initials and passing initials and score to local storage
  createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    if (initials === null) {
      console.log("No value entered!");
    } else {
      var finalScore = {
        initials: initials,
        score: timeRemaining,
      };
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      // Replace index with HighScores html document
      window.location.replace("./HighScores.html");
    }
  });
}

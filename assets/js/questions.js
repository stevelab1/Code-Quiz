// Make quiz's questions variable an array of question objects.
// Question to self: would it be more optimal top make questions a class so they contain their own methods, or would that violate separation of concerns?)
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

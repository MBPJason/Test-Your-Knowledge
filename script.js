var userQuestion = document.getElementById("questions");
var result = document.getElementById("result");
var timer = document.getElementById("timer");
var userChoice = document.getElementById("buttonGroup");
var makeButton = document.createElement("button");
var answers = userChoice.children;

var secondsLeft = 60;
var answerKey = [
  {
    answer1: "Hey ",
    answer2: "Answer 2",
    answer3: "Answer 3",
    answer4: "Answer 4",
  },
  {
    answer1: "There",
    answer2: "Answer 2",
    answer3: "Answer 3",
    answer4: "Answer 4",
  },
  {
    answer1: "What",
    answer2: "Answer 2",
    answer3: "Answer 3",
    answer4: "Answer 4",
  },
  {
    answer1: "is",
    answer2: "Answer 2",
    answer3: "Answer 3",
    answer4: "Answer 4",
  },
  {
    answer1: "up",
    answer2: "Answer 2",
    answer3: "Answer 3",
    answer4: "Answer 4",
  },
];

var questions = [
  "This is question 1",
  "This is question 2",
  "This is question 3",
  "This is question 4",
  "This is question 5",
];

var counter = 0;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function startQuiz() {
  userQuestion.innerHTML = "This is the quiz starting";
  result.innerHTML = "This is me explaining what you have to do for the quiz";
  makeButton.textContent = "Start Quiz";
  makeButton.setAttribute("id", "quizStart");
  userChoice.appendChild(makeButton);
  console.log("Start Quiz is reading");
}

function enterHighScore() {
  console.log("Enter High Score function is reading");
}

function quizInProgress() {
  userQuestion.innerHTML = questions[counter];
  answers[0].innerHTML = answerKey[counter].answer1;
  answers[1].innerHTML = answerKey[counter].answer2;
  answers[2].innerHTML = answerKey[counter].answer3;
  answers[3].innerHTML = answerKey[counter].answer4;
  console.log("quizInProgress is reading");
}

var buttonCheck = userChoice.addEventListener("click", function (event) {
  var buttons = event.target;
  if (buttons.matches("button")) {
    var whichChoice = buttons.getAttribute("id");

    if (whichChoice === "quizStart") {
      console.log("quizStart button is reading");

      result.innerHTML = "";
      var btn0 = document.createElement("button");
      var btn1 = document.createElement("button");
      var btn2 = document.createElement("button");
      var btn3 = document.createElement("button");

      btn0.innerHTML = questions[0];
      btn1.innerHTML = questions[1];
      btn2.innerHTML = questions[2];
      btn3.innerHTML = questions[3];

      btn0.setAttribute("id", "0");
      btn1.setAttribute("id", "1");
      btn2.setAttribute("id", "2");
      btn3.setAttribute("id", "3");

      userChoice.removeChild(userChoice.childNodes[0]);
      userChoice.removeChild(userChoice.childNodes[0]);
      userChoice.appendChild(btn0);
      userChoice.appendChild(btn1);
      userChoice.appendChild(btn2);
      userChoice.appendChild(btn3);
      quizInProgress();
      setTime();
    }

    if (counter >= 4) {
      enterHighScore();
      console.log("You met the end correctly");
    } else {
      if (whichChoice === "0") {
        console.log("You clicked an answer button");
        counter++;
        quizInProgress();
      }
      if (whichChoice === "1") {
        console.log("You clicked an answer button");
        counter++;
        quizInProgress();
      }
      if (whichChoice === "2") {
        console.log("You clicked an answer button");
        counter++;
        quizInProgress();
      }
      if (whichChoice === "3") {
        console.log("You clicked an answer button");
        counter++;
        quizInProgress();
      }
    }
  }
});

startQuiz();
document.addEventListener("click", buttonCheck);

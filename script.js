var userQuestion = document.getElementById("questions");
var result = document.getElementById("result");
var timer = document.getElementById("timer");
var userChoice = document.getElementById("buttonGroup");
var rightWrong = document.getElementById("rightWrong");
var makeButton = document.createElement("button");
var answers = userChoice.children;
var display = rightWrong.children;


// Start of Global number variables to increase or decrease
var secondsLeft = 60;
var textGoAway = 1;
var score = 0;
var counter = 0;
// End of Global number variables to increase or decrease

// Start of Arrays and Objects to be referenced
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

var answerChoice = [];
var correctAnswers = [0, 3, 1, 1, 2];
// End of Arrays and Objects to be referenced




// Start of Interval Timer Functions
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
    if (counter >= 4) {
      timer.textContent = "";
      clearInterval(timerInterval);
    }
  }, 1000);
}

function disappear() {
  var goAway = setInterval(function () {
    textGoAway--;
    if (textGoAway === 0) {
      display[1].textContent = "";
      display[0].style.opacity = "0";

      clearInterval(goAway);
    }
  }, 1000);
}
// End of Interval Timer Functions


// Start of Quiz Prompts
function startQuiz() {
  userQuestion.innerHTML = "This is the quiz starting";
  result.innerHTML = "This is me explaining what you have to do for the quiz";
  makeButton.textContent = "Start Quiz";
  makeButton.setAttribute("id", "quizStart");
  userChoice.appendChild(makeButton);
  console.log("Start Quiz Function is reading");
}

function quizInProgress() {
  userQuestion.innerHTML = questions[counter];
  answers[0].innerHTML = answerKey[counter].answer1;
  answers[1].innerHTML = answerKey[counter].answer2;
  answers[2].innerHTML = answerKey[counter].answer3;
  answers[3].innerHTML = answerKey[counter].answer4;
  console.log("quizInProgress is reading");
}

function rightOrWrong() {
  console.log("Right or Wrong function is reading");
  if (counter <= 4) {
    if (
      (counter - 1 === 0 && answerChoice[0] == correctAnswers[0]) ||
      (counter - 1 === 1 && answerChoice[1] == correctAnswers[1]) ||
      (counter - 1 === 2 && answerChoice[2] == correctAnswers[2]) ||
      (counter - 1 === 3 && answerChoice[3] == correctAnswers[3]) ||
      (counter - 1 === 4 && answerChoice[4] == correctAnswers[4])
    ) {
      display[0].style.opacity = "0.7";
      display[1].textContent = "Correct";
      console.log("right");
      score += 20;
      disappear();
    } else {
      display[0].style.opacity = "0.7";
      display[1].textContent = "Wrong";
      console.log("wrong");
      secondsLeft -= 10;
      disappear();
    }
  }
}

function enterHighScore() {
  console.log("Enter High Score function is reading");
}
// End of Quiz Prompts



// Start of Event Listeners
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
      var hr = document.createElement("hr");
      var pTag = document.createElement("p");

      btn0.innerHTML = questions[0];
      btn1.innerHTML = questions[1];
      btn2.innerHTML = questions[2];
      btn3.innerHTML = questions[3];

      btn0.setAttribute("id", "0");
      btn1.setAttribute("id", "1");
      btn2.setAttribute("id", "2");
      btn3.setAttribute("id", "3");
      hr.style.opacity = "0";

      userChoice.removeChild(userChoice.children[0]);
      userChoice.appendChild(btn0);
      userChoice.appendChild(btn1);
      userChoice.appendChild(btn2);
      userChoice.appendChild(btn3);
      rightWrong.appendChild(hr);
      rightWrong.appendChild(pTag);
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
        answerChoice.push(0);
        quizInProgress();
        rightOrWrong();
      }
      if (whichChoice === "1") {
        console.log("You clicked an answer button");
        counter++;
        answerChoice.push(1);
        quizInProgress();
        rightOrWrong();
      }
      if (whichChoice === "2") {
        console.log("You clicked an answer button");
        counter++;
        answerChoice.push(2);
        quizInProgress();
        rightOrWrong();
      }
      if (whichChoice === "3") {
        console.log("You clicked an answer button");
        counter++;
        answerChoice.push(3);
        quizInProgress();
        rightOrWrong();
      }
    }
  }
});
// End of Event Listeners


// Functions to be Executed on page startup
startQuiz();
document.addEventListener("click", buttonCheck);

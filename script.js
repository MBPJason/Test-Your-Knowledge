var timer = document.getElementById("timer");
var userChoice = document.getElementById("buttonGroup");
var answers = userChoice.children;

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

var buttonCheck = userChoice.addEventListener("click", function (event) {
    var buttons = event.target;
    if (buttons.matches("button")) {
        var whichChoice = buttons.getAttribute("id");

        if(whichChoice === "btn1") {
            console.log("Button 1")
        }
        if(whichChoice === "btn2") {
            console.log("Button 2")
        }
        if(whichChoice === "btn3") {
            console.log("Button 3")
        }
        if(whichChoice === "btn4") {
            console.log("Button 4")
        }
    }
});

document.addEventListener("click", buttonCheck);

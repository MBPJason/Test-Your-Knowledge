var timer = document.getElementById("timer");
var userChoice = document.getElementById("buttonGroup");

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }

 var check = userChoice.addEventListener("click", function() {
     console.log("hello world");
     if (userChoice.children.getElementById("btn1") == btn1) {
         console.log("button 1 works");
     }
 })

 document.addEventListener("click", check);

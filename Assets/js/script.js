var navElement = document.getElementById("nav");

var timerElement = document.getElementById("timer");

var mainElement = document.getElementById("main");

var questElement = document.getElementById("questions");

var timeRemaining = 75;

function setTimer () {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timerElement.textContent = "Timer: " + timeRemaining;
        if (timeRemaining === 0) {
            clearInterval(timerInterval)
            timerElement.textContent = "";
            // call function going to score page
        }
    }, 1000);
}

setTimer();
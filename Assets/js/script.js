var score;

var navElement = document.getElementById("nav");

var timerElement = document.getElementById("timer");

var mainElement = document.getElementById("main");

var questElement = document.getElementById("questions");

var answerElement = document.getElementById("answer");

var timeRemaining = 75;
// timer function
function setTimer () {
    var timerInterval = setInterval(function() {
        timeRemaining--;
        timerElement.textContent = "Timer: " + timeRemaining;
        if (timeRemaining === 0) {
            clearInterval(timerInterval)
            timerElement.textContent = "";
            // call function going to score page
        }
        function answerFalse(){
        if (help = false) {
            return;
        }
        timeRemaining -= 5;
        setTimer();
        return;
        }   
        
    }, 1000);
}
    setTimer();

    // var help = confirm("yes");
    
    // penalty function 

    // landing page function - when clicking start, calls timer function and begins the quiz

    // answer notification function x 2 correct, wrong

    // question 1 function 

    // question 2 function

    // question 3 function

    // question 4 function

    // question 5 function

    // submit initials function

    // highscores function

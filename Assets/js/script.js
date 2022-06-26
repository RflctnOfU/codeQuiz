var score;

const penalty = 5;

var timeRemaining = 75;

var navElement = document.getElementById("nav");

var timerElement = document.getElementById("timer");

var mainElement = document.getElementById("main");

var questElement = document.getElementById("questions");

var answerElement = document.getElementById("answer");

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
 
    }, 1000);
}

    var heading = document.getElementById("heading");
    var intro = document.getElementById("description");
    var begin = document.getElementById("begin");
    begin.addEventListener("click", startQuiz);

    function startPage() {
    heading.textContent = "Coding Quiz Challenge";
    heading.setAttribute("style", "font-size: 2rem; font-weight: bold; margin-bottom: 20px");
    intro.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    begin.textContent = "Start Quiz";
    begin.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; margin-top: 10px;")
    }

    function startQuiz() {
        heading.textContent = "";
        heading.removeAttribute("style");
        intro.textContent = "";
        begin.textContent = "";
        begin.removeAttribute("style");
    }

    startPage();
    setTimer();
    // penalty code
   /* if (help === false) {
        timeRemaining -= penalty;
    } */

    // landing page function - when clicking start, calls timer function and begins the quiz

    // answer notification function x 2 correct, wrong

    // question 1 function 

    // question 2 function

    // question 3 function

    // question 4 function

    // question 5 function

    // submit initials function

    // highscores function

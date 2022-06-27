const penalty = 10;

var timeRemaining = 75;

var navElement = document.getElementById("nav");

var timerElement = document.getElementById("timer");

var mainElement = document.getElementById("main");

var quiz = document.getElementById("quiz");

var heading = document.getElementById("heading");

var questions = document.getElementById("questions");

var intro = document.getElementById("description");

var list = document.getElementById("list");

var begin = document.getElementById("begin");

var answerElement = document.getElementById("answer");

var one = document.getElementById("one");

var two = document.getElementById("two");

var three = document.getElementById("three");

var four = document.getElementById("four");

const button0 = document.createElement('button' , { is : 'button0'});

const button1 = document.createElement('button', { is : 'button1'});

const button2 = document.createElement('button', { is : 'button2'});

const button3 = document.createElement('button', { is : 'button3'});

const button4 = document.createElement('button', { is : 'button4'});

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

    function startPage() {
    heading.textContent = "Coding Quiz Challenge";
    heading.setAttribute("style", "font-size: 2rem; font-weight: bold; margin-bottom: 20px");
    intro.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    button0.textContent = "Start Quiz";
    button0.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px;");
    begin.appendChild(button0);
    button0.addEventListener("click", startQuiz);
    }
        // question 1 function
    function startQuiz() {
        heading.textContent = "";
        heading.removeAttribute("style");
        intro.textContent = "";
        begin.textContent = "";
        begin.removeAttribute("style");
        setTimer();
        button0.textContent = "";
        quiz.setAttribute("style", "text-align: start;")
        questions.textContent = "Commonly used data types DO NOT include:";
        questions.setAttribute("style", "font-size: 1.5rem; font-weight: bold; margin-bottom: 20px; text-align: start;");
        one.appendChild(button1);
        two.appendChild(button2);
        three.appendChild(button3);
        four.appendChild(button4);
        button1.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px;");
        button2.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px;");
        button3.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px;");
        button4.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px;");
        one.textContent = "1. Strings";
        two.textContent = "2. Booleans";
        three.textContent = "3. Alerts";
        four.textContent = "4. Numbers";

        
    }
    console.log(startPage)
    startPage();
    setTimer();
    // penalty code
   /* if (help === false) {
        timeRemaining -= penalty;
    } */

    // landing page function - when clicking start, calls timer function and begins the quiz

    // answer notification function x 2 correct, wrong

    // question 2 function

    // question 3 function

    // question 4 function

    // question 5 function

    // submit initials function

    // highscores function

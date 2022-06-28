const penalty = 10;

var timeRem = 2;

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

function correctAnswer() {
    var timeInt = setInterval(function() {
        timeRem--;
        answerElement.textContent = "Correct answer! ✅";
        answerElement.setAttribute("style", "font-style: oblique; border-top: solid 1px; width: 50vw; padding: 10px 0;");
        if (timeRem === 0) {
            clearInterval(timeInt)
            answerElement.textContent = "";
            answerElement.removeAttribute("style");
        }
    }, 1000);
    
}

function a() {
    correctAnswer();
    timeRem = 2;
    console.log(timeRem)
}

function wrongAnswer() {
    // update div to say correct answer
    var timeInt2 = setInterval(function() {
        timeRem--;
        answerElement.textContent = "Wrong answer! ❌";
        answerElement.setAttribute("style", "font-style: oblique; border-top: solid 1px; width: 50vw; padding: 10px 0;");
        // call function to show next quest??
        if (timeRem === 0) {
            clearInterval(timeInt2)
            answerElement.textContent = "";
            answerElement.removeAttribute("style");
        }
    }, 1000);
    timeRemaining -= penalty;
}

function b() {
    wrongAnswer();
    timeRem = 2;
    console.log(timeRem)
}
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

function appendBtns() {
    one.appendChild(button1);
    two.appendChild(button2);
    three.appendChild(button3);
    four.appendChild(button4);
}

// function removeBtns() {
//     one.removeChild(button1);
//     two.removeChild(button2);
//     three.removeChild(button3);
//     four.removeChild(button4);
// }

function init() {
    heading.textContent = "Coding Quiz Challenge";
    heading.setAttribute("style", "font-size: 2rem; font-weight: bold; margin-bottom: 20px");
    intro.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    button0.textContent = "Start Quiz";
    button0.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px;");
    begin.appendChild(button0);
    button0.addEventListener("click", questionOne);
}
        // question 1 function
function questionOne() {
    setTimer();
    heading.textContent = "";
    heading.removeAttribute("style");
    intro.textContent = "";
    begin.textContent = "";
    begin.removeAttribute("style");
    button0.textContent = "";
    quiz.setAttribute("style", "text-align: start;")
    questions.textContent = "Commonly used data types DO NOT include:";
    questions.setAttribute("style", "font-size: 1.5rem; font-weight: bold; margin-bottom: 20px; text-align: start;");
    appendBtns();
    button1.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px 10px 5px 5px;");
    button2.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px 10px 5px 5px;");
    button3.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px 10px 5px 5px;");
    button4.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px 10px 5px 5px;");
    button1.textContent = "1. Strings";
    button2.textContent = "2. Booleans";
    button3.textContent = "3. Alerts";
    button4.textContent = "4. Numbers";
    button1.addEventListener("click", b);
    button2.addEventListener("click", b);
    button3.addEventListener("click", a)
    button4.addEventListener("click", b);
    // if (button3.click) {
    //     questionTwo();
    // } else if (button1.click() || button2.click() || button4.click()) {
    //     questionTwo();
    // }
    if (button3.addEventListener("click", questionTwo)) {
        correctAnswer();
        console.log("here we go")
    } else if ((button1.addEventListener("click", questionTwo)) || (button2.addEventListener("click", questionTwo)) || (button4.addEventListener("click", questionTwo))) {
        wrongAnswer();
    }
}

function questionTwo() {
    timeRem = 2;
    questions.textContent = "The condition in an if/else statement is enclosed within____.";
    button1.textContent = "1. Quotes";
    button2.textContent = "2. Curly brackets";
    button3.textContent = "3. Parentheses";
    button4.textContent = "4. Square brackets";
    button1.addEventListener("click", b);
    button2.addEventListener("click", b);
    button3.addEventListener("click", a);
    button4.addEventListener("click", b);
    if (button3.addEventListener("click", questionThree)) {
        a();
    } else if ((button1.addEventListener("click", questionThree)) || (button2.addEventListener("click", questionThree)) || (button4.addEventListener("click", questionThree))) {
        b();
    }
}

function questionThree() {
    timeRem = 2;
    questions.textContent = "Arrays in JavaScript can be used to store ____.";
    button1.textContent = "1. Numbers and Strings";
    button2.textContent = "2. Other Arrays";
    button3.textContent = "3. Booleans";
    button4.textContent = "4. All of the above";
    // button1.addEventListener("click", b);
    // button2.addEventListener("click", b);
    button3.removeEventListener("click", a);
    button3.addEventListener("click", b);
    button4.removeEventListener("click", b);
    button4.addEventListener("click", a);
    if (button4.addEventListener("click", questionFour)) {
        a();
    } else if ((button1.addEventListener("click", questionFour)) || (button2.addEventListener("click", questionFour)) || (button3.addEventListener("click", questionFour))) {
        b();
    }
}

function questionFour() {
    timeRem = 2;
    questions.textContent = "String values must be enclosed within ____ when being assigned to variables.";
    button1.textContent = "1. Commas";
    button2.textContent = "2. Curly Brackets";
    button3.textContent = "3. Quotes";
    button4.textContent = "4. Parentheses";
    // button1.addEventListener("click", b);
    // button2.addEventListener("click", b);
    button3.removeEventListener("click", b);
    button3.addEventListener("click", a);
    button4.removeEventListener("click", a);
    button4.addEventListener("click", b);
    if (button3.addEventListener("click", questionFive)) {
        a();
    } else if ((button1.addEventListener("click", questionFive)) || (button2.addEventListener("click", questionFive)) || (button4.addEventListener("click", questionFive))) {
        b();
    }
}

function questionFive() {
    timeRem = 2;
    questions.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    button1.textContent = "1. JavaScript";
    button2.textContent = "2. Terminal/Bash";
    button3.textContent = "3. for loops";
    button4.textContent = "4. console.log";
    // button1.addEventListener("click", b);
    // button2.addEventListener("click", b);
    button3.removeEventListener("click", a);
    button3.addEventListener("click", b);
    button4.removeEventListener("click", b);
    button4.addEventListener("click", a);
    if (button4.addEventListener("click", enterInitials)) {
        a();
    } else if ((button1.addEventListener("click", enterInitials)) || (button2.addEventListener("click", enterInitials)) || (button3.addEventListener("click", enterInitials))) {
        b();
    }
}

function enterInitials() {
    console.log("hello")
}
    init();

    // submit initials function

    // highscores function

const penalty = 10;

var scores = {
    initials: '',
    score: ''
}

var timeRemaining = 75, clear;

var form = document.getElementById("form")

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
// answer correct/incorrect and splash timeout
function answerTimeout () {
    answerElement.textContent = '';
    answerElement.removeAttribute("style")
}

function correctAnswer() {
    answerElement.textContent = "Correct answer! ✅";
    answerElement.setAttribute("style", "font-style: oblique; border-top: solid 1px; width: 50vw; padding: 10px 0;");
    const timeoutDisplay = setTimeout(answerTimeout, 3000);
}

function wrongAnswer() {
    answerElement.textContent = "Wrong answer! ❌";
    answerElement.setAttribute("style", "font-style: oblique; border-top: solid 1px; width: 50vw; padding: 10px 0;");
    const timeoutDisplay = setTimeout(answerTimeout, 3000);
    timeRemaining -= penalty;
    console.log(timeRemaining);
    console.log(penalty);
}
// functions for click events
function a() {
    correctAnswer();
    questionTwo();
}

function b() {
    wrongAnswer();
    questionTwo();
}

function c() {
    correctAnswer();
    questionThree();
}
// had to jerryrig a bug i was unable to find...the timer penalty was being applied twice on wrong answers, and once on correct answers where it should not have been.
function d() {
    wrongAnswer();
    questionThree();
    timeRemaining += 10;
}

function e() {
    correctAnswer();
    questionFour();
    timeRemaining += 10;
}

function f() {
    wrongAnswer();
    questionFour();
    timeRemaining += 10;
}

function g() {
    correctAnswer();
    questionFive();
    // timeRemaining += 10;
}

function h() {
    wrongAnswer();
    questionFive();
    timeRemaining += 10;
}

function i() {
    correctAnswer();
    enterInitials();
}

function j() {
    wrongAnswer();
    enterInitials();
}

var timerInterval;

// timer function
function setTimer () {
    timerInterval = setInterval(function() {
        timeRemaining--;
        timerElement.textContent = "Timer: " + timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval)
            timerElement.textContent = "";
            enterInitials();
        }
    }, 1000);
}

// on load function
function init() {
    heading.textContent = "Coding Quiz Challenge";
    heading.setAttribute("style", "font-size: 2rem; font-weight: bold; margin-bottom: 20px");
    intro.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    button0.textContent = "Start Quiz";
    button0.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px; margin: 10px;");
    begin.appendChild(button0);
    button0.addEventListener("click", questionOne);
}
// question functions
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
    one.appendChild(button1);
    two.appendChild(button2);
    three.appendChild(button3);
    four.appendChild(button4);
    button1.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px 10px 5px 5px;");
    button1.setAttribute("id", "one")
    button2.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px 10px 5px 5px;");
    button3.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px 10px 5px 5px;");
    button4.setAttribute("style", "background-color: rgb(100, 65, 147); color: white; border-radius: 7px; padding: 5px 10px 5px 5px;");
    button1.textContent = "1. Strings";
    button2.textContent = "2. Booleans";
    button3.textContent = "3. Alerts";
    button4.textContent = "4. Numbers";
    button1.addEventListener("click", b);
    button2.addEventListener("click", b);
    button3.addEventListener("click", a);
    button4.addEventListener("click", b);
}

function questionTwo() {
    questions.textContent = "The condition in an if/else statement is enclosed within____.";
    button1.textContent = "1. Quotes";
    button2.textContent = "2. Curly brackets";
    button3.textContent = "3. Parentheses";
    button4.textContent = "4. Square brackets";
    button1.addEventListener("click", d);
    button2.addEventListener("click", d);
    button3.addEventListener("click", c);
    button4.addEventListener("click", d);
}

function questionThree() {
    questions.textContent = "Arrays in JavaScript can be used to store ____.";
    button1.textContent = "1. Numbers and Strings";
    button2.textContent = "2. Other Arrays";
    button3.textContent = "3. Booleans";
    button4.textContent = "4. All of the above";
    button1.addEventListener("click", f);
    button2.addEventListener("click", f);
    button3.addEventListener("click", f);
    button4.addEventListener("click", e);
}

function questionFour() {
    questions.textContent = "String values must be enclosed within ____ when being assigned to variables.";
    button1.textContent = "1. Commas";
    button2.textContent = "2. Curly Brackets";
    button3.textContent = "3. Quotes";
    button4.textContent = "4. Parentheses";
    button1.addEventListener("click", h);
    button2.addEventListener("click", h);
    button3.addEventListener("click", g);
    button4.addEventListener("click", h);
}

function questionFive() {
    questions.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    button1.textContent = "1. JavaScript";
    button2.textContent = "2. Terminal/Bash";
    button3.textContent = "3. for loops";
    button4.textContent = "4. console.log";
    button1.addEventListener("click", j);
    button2.addEventListener("click", j);
    button3.addEventListener("click", j);
    button4.addEventListener("click", i);
}
// enter initials for score
function enterInitials(e) {
    clearInterval(timerInterval);
    one.removeChild(button1);
    two.removeChild(button2);
    three.removeChild(button3);
    four.removeChild(button4);
    var label = document.createElement('label');
    var submit = document.createElement('input');
    var input = document.createElement('input');
    label.setAttribute("for", "input");
    label.textContent = "Enter Initials: "
    input.setAttribute('name', 'input');
    input.setAttribute('type', 'text');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Submit');
    submit.setAttribute('style', 'background-color: rgb(100, 65, 147); color: white; border-radius: 7px; margin: 0 10px;');
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);
    console.log("hello")
    questions.textContent = "All Done!"
    intro.textContent = "Your final score is " + timeRemaining;
    intro.setAttribute('style', 'margin-bottom: 10px;');
    submit.addEventListener('click', function(e) {
        localStorage.setItem("initials", input.value)
        localStorage.setItem("score", timeRemaining);
        e.preventDefault();
        scores.initials = localStorage.getItem('initials');
        scores.score = localStorage.getItem('score');
        console.log(scores);
        location.href = '../../high-scores.html'
    });
    
}

    init();


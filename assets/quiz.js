// Quiz Game for testing Javascript students

// Parameters for name, time, 
var quizHScore = document.getElementById("quizHScore")
var timeStart = 100;
var studentName = "Tony";

//Quizz Function to begin
startQuiz.addEventListener("click", function startQuiz()) {

};

// timer function
function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onclick = function() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}

// function for Javascript questions
var questions = function() {};

//function for results
var resut = function() {};
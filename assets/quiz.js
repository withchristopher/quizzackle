// Quiz Game for testing Javascript students

// Parameters for name, time, 
var quizHScore = document.getElementById("quizHScore")
var timeStart = 100;
var studentName = "Tony";

//question list

var questionList = [{
    question: "Commonly used data types do not include?",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correct: "B"
}, {
    question: "If a function requires another function to pass a set value, would it be considered a paramter or an argument?",
    choiceA: "The function requires a set value, you would use an argument.",
    choiceB: "The function requires a set value, you would use a parameter.",
    choiceC: "Cannot be used as a function cannot take another function as an argument or parameter.",
    choiceD: "It does not matter.",
    correct: "A"
}, {
    question: "Which keyword would you use to exit a flow?",
    choiceA: "continue",
    choiceB: "break",
    choiceC: "alert",
    choiceD: "end",
    correct: "B"
}, {
    question: "Commonly used data types do not include?",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correct: "B"
}, {
    question: "Commonly, when using a list of groceries, what would you setup to run through the list in a function?",
    choiceA: "for loop",
    choiceB: "conditional",
    choiceC: "iteration",
    choiceD: "break",
    correct: "B"
}];

//Quizz Function to begin
startButton.addEventListener("click", function startTimer);

function startButton() {
    start.style.display = "none";
    showQuestion();
    quiz.style.display = "inline-block";
    showProgress();
    showCounter();
    TIMER = setInterval(showCounter, 1000); // 1000ms = 1s

}
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
};

window.onclick = function() {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};




// function for Javascript questions
function questions() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
};

//function for results
var resut = function() {};
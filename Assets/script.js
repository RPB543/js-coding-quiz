var questions = [
    {
        question: "Which is not a common data type in Javascript?",
        choices: ["String", "Boolean", "Number", "Property"],
        answer: "Property",
    },
    {
        question: "What does DOM stand for?",
        choices: ["Document Output Model", "Document Output Memory", "Document Object Model", "Document Object Memory"],
        answer: "Document Object Model",
    },
    {
        question: "How do you write 'Happy Birthday' in an alert box?",
        choices: ["prompt('Happy Birthday');", "alertBox('Happy Birthday');", "msgBox('Happy Birthday');", "alert('Happy Birthday');"],
        answer: "alert('Happy Birthday');",
    },    
    { 
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above",
    },
    {
        question: "Which of the following is not a looping structure in Javascript?",
        choices: ["For", "Loop", "While", "Do...while"],
        answer: "Loop",
    }
];

// global variables created //
var startBtn = document.getElementById("start-btn");
var startScreen = document.getElementById("container");
var timer = document.getElementById("time");
var questionContainer = document.getElementById("wrapper");
var currentQuestion = 0;
var score = 0;
var timeLeft = 60;
var timerId;

// starts timer for quiz once start button is clicked
startBtn.addEventListener("click", function () {
    timerId = setInterval(function () {
      timeLeft--;
      timer.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  
    timer.textContent = timeLeft;
    hideElements();
    showQuestion();
  });

// hides intro and start button, removes hide from timer
function hideElements() {
    startBtn.classList.add("hide");
    document.getElementById("intro").classList.add("hide");
    document.getElementById("count").classList.remove("hide");
}

// div is created for questions
var displayQuestion = document.createElement("div");
    displayQuestion.setAttribute("id", "questions");
    questionContainer.appendChild(displayQuestion);

// div is created for answers
var answers = document.createElement("div");
answers.setAttribute("id", "answers");
questionContainer.appendChild(answers);

//display questions
function showQuestion() {
  
displayQuestion.textContent = questions[currentQuestion].question;
// creates loop for question generation and create buttons for answers  
for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = questions[currentQuestion].choices[i];
    choiceBtn.setAttribute("class", "btn");
    choiceBtn.setAttribute("value", questions[currentQuestion].choices[i]);
    displayQuestion.append(choiceBtn);

    choiceBtn.onclick = buttonClick;
    }
  
//selecting an answer and deducting points if not correct
function buttonClick() {
if (this.value === questions[currentQuestion].answer) {
    score++;
} else if (this.value !== questions[currentQuestion].answer) {
    timeLeft -= 10;
    timer.textContent = timeLeft;
}
  
currentQuestion++;

// loop to continue or finish after questions are done
if (currentQuestion === questions.length) {
endGame();
} else {
showQuestion();
}
answers.textContent = "Total Correct: " + score + "/5";
}
}
  
// if time runs out or user answers all questions the game is ended
function endGame() {
    displayQuestion.textContent = "";
    var endScreen = document.getElementById("end-screen");
    endScreen.classList.remove("hide");
    clearInterval(timerId);
  
var finalScore = document.getElementById("final-score");
finalScore.textContent = timeLeft;
  
}
 
// getting the highScore key
var scores = JSON.parse(localStorage.getItem("highScore")) || [];

function saveScore() {
var initialInput = document.getElementById("initials").value.trim();
  
var newScore = {
    totalScore: timeLeft * score,
    initials: initialInput,
};
  
//adds data the the newScore variable
scores.push(newScore);

// sets the highScore key
localStorage.setItem("highScore", JSON.stringify(scores));
window.location.href ="highscore.html";
}


// when the submit button is clicked saveScore function is ran to store data
var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", saveScore);
  
var startBtn = document.getElementById("start-btn");
var startScreen = document.getElementById("container");
var timer = document.getElementById("time");
var currentQuestion = 0;
var score = 0;
var timeLeft = 60;
var timerId;


startBtn.addEventListener("click", function () {
    //timer is starts once the start button is clicked/
    timerId = setInterval(function () {
      timeLeft--;
      timer.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  
    timer.textContent = timeLeft;
    hideElement();
    showQuestion();
  });



let ranQuestions, currentQuestion

// added event listener to control start button
startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
    currentQuestion++
    setNextQuestion()
});

function startQuiz() {
    startButton.classList.add("hide");
    document.getElementById("intro").classList.add("hide");
    ranQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
};


function setNextQuestion() {
    resetState()
    showQuestion(ranQuestions[currentQuestion]);
}

function showQuestion(questions) {
    questionIndex.innerText = questions.question;
    questions.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerText = answers.text;
        button.classList.add("btn");
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerEl.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}
function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    if (ranQuestions.length > currentQuestion +1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerHTML = "Restart"
        startButton.classList.remove('hide');
    }
    
 }

var questions = [
    {
        question: "Which is not a common data type in Javascript?",
        answers: [
            {text: "String", correct: false},
            {text: "Boolean", correct: false},
            {text: "Number", correct: false},
            {text: "Property", correct: true}
        ]},
    {
        question: "What does DOM stand for?",
        answers: [
            {text: "Document Output Model", correct: false},
            {text: "Document Output Memory", correct: false},
            {text: "Document Object Model", correct: true},
            {text: "Document Object Memory", correct: false}
        ]},
    {
        question: "How do you write 'Happy Birthday' in an alert box?",
        answers: [
            {text:"prompt('Happy Birthday');", correct: false},
            {text:"alertBox('Happy Birthday');", correct: false},
            {text:"msgBox('Happy Birthday');", correct: false},
            {text:"alert('Happy Birthday');", correct: true}
       ]},    
    { 
        question: "Arrays in Javascript can be used to store ____.",
        answers: [
            {text:"Numbers and strings", correct: false},
            {text: "Other arrays", correct: false}, 
            {text: "Booleans", correct: false},
            {text: "All of the above", correct: true}
        ]},
];
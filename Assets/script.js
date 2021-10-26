const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("wrapper");
const questionEl = document.getElementById("questions");
const answerEl = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

//30 seconds per question:
var count = 30;
// Assigns interval
var interval = setInterval(function(){
    document.getElementById('count').innerHTML=count;
    count--;
    if (count === 0){
      clearInterval(interval);
      document.getElementById('count').innerHTML='Done';
      // or...
      alert("You're out of time!");
    }
  }, 1000);

// Assigns penalty time
var penalty = 10;

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
    questionEl.innerText = questions.question;
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

const questions = [
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
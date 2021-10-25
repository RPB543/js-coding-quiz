var buttonE1 = document.querySelector("#start-quiz");


// added event listener to control start button
buttonE1.addEventListener("click", function() {
});


var questions = [
    {
        question: "Which is not a common data type in Javascript?",
        answer: ["String", "Boolean", "Number", "Property"],
        correctAnswer: "Property"
    },
    {
        question: "What does DOM stand for?",
        answer: ["Document Output Model", "Document Output Memory", "Document Object Model", "Document Object Memory"],
        correctAnswer: "Document Object Model"
    },
    {
        question: "How do you write 'Happy Birthday' in an alert box?",
        answer: ["prompt('Happy Birthday');", "alertBox('Happy Birthday');", "confirm('Happy Birthday');", "alert('Happy Birthday');"],
        correctAnswer: "alert('Happy Birthday');"
    },    
    { 
        question: "Arrays in Javascript can be used to store ____.",
        answer: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        correctAnswer: "All of the above"
    },

];
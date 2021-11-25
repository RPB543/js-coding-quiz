var scores = JSON.parse(localStorage.getItem("highScore"))
var scoreList = document.querySelector(".highscores");
var restartBtn = document.getElementById("restart-btn");

// make high score function
function printScores() {
    scores.forEach(score => {
        var li = document.createElement("li");
        li.textContent = score.initials + " " + score.totalScore;
        scoreList.appendChild(li);
    });
}

function sortScores() {
    scores.sort((a,b) => {
        return b.totalScore - a.totalScore;
    })
    printScores();
}

sortScores();

restartBtn.addEventListener("click", function(){
    console.log("clicked")
    window.location.href = "index.html"
})

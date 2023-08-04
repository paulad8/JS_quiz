// Variables

const startGameArea = document.getElementById("start-game-area");
const difficultyGameArea = document.getElementById("difficulty-game-area");
const questionGameArea = document.getElementById("question-game-area");
const difficultyEasyBtn = document.getElementById("difficulty-easy");
const difficultyHardBtn = document.getElementById("difficulty-hard");
const nextQuestionBtn = document.getElementById("next-question");
const answer1 = document.getElementById("answer1-btn");
const answer2 = document.getElementById("answer2-btn");
const answer3 = document.getElementById("answer3-btn");
const answer4 = document.getElementById("answer4-btn");
const currentQuestionNumber = document.getElementById("show-current-question");
const questionText = document.getElementById("question-text");



let gameState = "start-game-area";
let currentQuestion = 0;
let shuffledQuestions = 0;
let currentQuestionSet = {};

// Event Listeners
difficultyEasyBtn.addEventListener("click", runQuiz);

document.getElementById("play").addEventListener("click", toDifficultyGameArea);


//

/** When the play clicks 'Let's Go!', hides the start-game-area and shows the difficulty-game-area **/

function toDifficultyGameArea() {
    startGameArea.classList.add("hide");
    difficultyGameArea.classList.remove("hide");
    gameState = "difficulty-game-area";

}

/** Depending on what difficulty the player selects, this function will run the quiz
*/

function runQuiz()
var difficulty = event.target.value;

if (difficulty === "easy") {
    shuffledQuestions = easyQuestions.sort(() => Math.random() - 0.5);
    currentQuestionSet = shuffledQuestions;
    playerDifficulty = "easy";
    difficultyEasyBtn.innerText = "Loading...";
} else if (difficulty === "hard") {
    shuffledQuestions = hardQuestions.sort(() => Math.random() - 0.5);
    currentQuestionSet = shuffledQuestions;
    playerDifficulty = "hard";
    difficultyHardBtn.innerText = "Loading...";
}







/*jshint esversion: 6 */
// Variables

const startGameArea = document.getElementById("start-game-area");
const difficultyGameArea = document.getElementById("difficulty-game-area");
const questionGameArea = document.getElementById("question-game-area");
const resultsGameArea = document.getElementById("results-game-area");
const difficultyEasyBtn = document.getElementById("difficulty-easy");
const difficultyHardBtn = document.getElementById("difficulty-hard");
const nextQuestionBtn = document.getElementById("next-question");
const answer1 = document.getElementById("answer1-btn");
const answer2 = document.getElementById("answer2-btn");
const answer3 = document.getElementById("answer3-btn");
const answer4 = document.getElementById("answer4-btn");
const currentQuestionNumber = document.getElementById("show-current-question");
const questionText = document.getElementById("question-text");
const gold = document.getElementById("gold");
const silver = document.getElementById("silver");
const bronze = document.getElementById("bronze");
const ded = document.getElementById("ded");



let gameState = "start-game-area";
let displayedQuestionNumber = 1;
let currentQuestion = 0;
let shuffledQuestions = 0;
let quizLength = 10;
let currentQuestionSet = {};
let score = 0;
let answerClicked = false;
let determineColour = "unanswered";
let goHome = document.getElementById("home-icon");
let playAgain = document.getElementById("play-again-btn");
let playerDifficulty;
let answeredCorrect = 0;
let answeredWrong = 0;


// Event Listeners
difficultyEasyBtn.addEventListener("click", runQuiz);
difficultyHardBtn.addEventListener("click", runQuiz);
document.getElementById("play").addEventListener("click", toDifficultyGameArea);
goHome.addEventListener("click", reload);
//nextQuestionBtn.addEventListener("click", nextQuestion);
playAgain.addEventListener("click", reload);

//

// Reload the site

function reload() {
   location.reload();
}

/** When the play clicks 'Let's Go!', hides the start-game-area and shows the difficulty-game-area **/

function toDifficultyGameArea() {
    startGameArea.classList.add("hide");
    difficultyGameArea.classList.remove("hide");
    gameState = "difficulty-game-area";

}

/** Depending on what difficulty the player selects, this function will run the quiz
*/

function runQuiz(event) {
    difficultyGameArea.classList.add("hide");
    questionGameArea.classList.remove("hide");
    gameState = "question-game-area";
    let difficulty = event.target.value;

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
}

//function nextQuestion()  {

//}

/** Checks if the player has answered 10 questions, and if not will loop through the questions and display them to the player. Also listens for the player's answer and then calls checkAnswer() to validate. Once all 10 questions have been answered, the gameState updates to resultsGameArea with the calculated score and relevant congratulatory message. */

function buildQuestions() {
    if (currentQuestion >= quizLength) {
        questionGameArea.classList.add("hide");
        resultsGameArea.classList.remove("hide");
        gameState = "results-game-area";
        if (answeredCorrect == 10) {
            document.getElementById("results-header").innerText = `${ Excellent }`;
            silver.classList.add("hide");
            bronze.classList.add("hide");
            ded.classList.add("hide");
            gold.classList.remove("hide");
            document.getElementById("results-body-text").innerText = `You answered ${answeredCorrect}
            ${ playerDifficulty } questions correct.`;
        } else if (answeredCorrect == 7 || answeredCorrect == 8 || answeredCorrect == 9) {
            document.getElementById("results-header").innerText = `${ Great }`;
            silver.classList.remove("hide");
            bronze.classList.add("hide");
            ded.classList.add("hide");
            gold.classList.add("hide");
            document.getElementById("results-body-text").innerText = `You answered ${ answeredCorrect }
            ${ playerDifficulty } questions correct.`;
        } else if (answeredCorrect == 4 || answeredCorrect == 5 || answeredCorrect == 6) {
            document.getElementById("results-header").innerText = `${ Nice }`;
            silver.classList.add("hide");
            bronze.classList.remove("hide");
            ded.classList.add("hide");
            gold.classList.add("hide");
            document.getElementById("results-body-text").innerText = `You answered ${ answeredCorrect }
            ${ playerDifficulty } questions correct.`;
        }  else { 
                document.getElementById("results-header").innerText = `${ Fail }`;
                silver.classList.add("hide");
                bronze.classList.add("hide");
                ded.classList.remove("show");
                gold.classList.add("hide");
                document.getElementById("results-body-text").innerText = `You answered ${ answeredCorrect } ${ playerDifficulty } questions correct.`;
        }

/*
    }   else {
        gameState = "question-game-area";
        for (let i = 0; i < currentQuestionSet.length; i++ )  {
        questionText.innerHTML = currentQuestionSet[currentQuestion].question;
        answer1.innerHTML = currentQuestionSet[currentQuestion].a;
        answer2.innerHTML = currentQuestionSet[currentQuestion].b;
        answer3.innerHTML = currentQuestionSet[currentQuestion].c;
        answer4.innerHTML = currentQuestionSet[currentQuestion].d;
        answer1.onclick = checkAnswer;
        answer2.onclick = checkAnswer;
        answer3.onclick = checkAnswer;
        answer4.onclick = checkAnswer;
        }
    }
}
/*


/** Validates the player's answer */

function checkAnswer() {
    answer1.setAtribute("disabled", "disabled");
    answer2.setAtribute("disabled", "disabled");
    answer3.setAtribute("disabled", "disabled");
    answer4.setAtribute("disabled", "disabled");
    answer1.classList.remove("answer-buttons-hover");
    answer2.classList.remove("answer-buttons-hover");
    answer3.classList.remove("answer-buttons-hover");
    answer4.classList.remove("answer-buttons-hover");

    let playerAnswer = this.value;
    let correctAnswer = currentQuestionSet[currentQuestion].answer;
    if (playerAnswer === correctAnswer)  {
    answerClicked = true;
    determineColour = "correct";
    answeredCorrect++;
    incrementScore();
    showNextQuestion();
}   else  {
    answerClicked = true;
    determineColour = "incorrect";
    answeredWrong++;
    showNextQuestion();
}
}


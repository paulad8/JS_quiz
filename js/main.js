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
let currentQuestionIndex = 0; // Correctly initialise this variable
let shuffledQuestions = [];
let quizLength = 10;
let currentQuestionSet = {};
let setColour = 0;
let answerClicked = false;
let goHome = document.getElementById("home-icon");
let playAgain = document.getElementById("play-again-btn");
let playerDifficulty;
let answeredCorrect = 0;
let answeredWrong = 0;

// Reloads the site

function reload() {
    location.reload();
}




// Event Listeners
document.getElementById("play").addEventListener("click", setDifficulty);
difficultyEasyBtn.addEventListener("click", function(event) {
    this.innerText = "Loading.."; //Change the button text
    setTimeout(function () {
        runQuiz(event); // Pass the event object to runQuiz
    }, 1000); //Wait for a second before running the quiz
});

difficultyHardBtn.addEventListener("click", function (event) {
    this.innerText = "Loading.."; //Change the button text
    setTimeout(function () {
        runQuiz(event); // Pass the event object to runQuiz
    }, 1000); //Wait for a second before running the quiz
});

goHome.addEventListener("click", reload);
nextQuestionBtn.addEventListener("click", () => {
    currentQuestionIndex++; // Move to the next question
    renderQuestion(); // Render the next question
});
playAgain.addEventListener("click", reload);


/** When the play clicks 'Let's Go!', hides the start-game-area and shows the difficulty-game-area **/

function setDifficulty(event) {
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

renderQuestion(); // Call renderQuestion when starting the quiz

// Function to populate the question area with the current question
function renderQuestion() {
    const currentQuestion = currentQuestionSet[currentQuestionIndex];
    const questionTextElement = document.getElementById("question-text");
    const answerButtons = document.querySelectorAll(".answer-btn");

    // Set the question text
    questionTextElement.textContent = currentQuestion.question;

    // Set the answer options
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion['option${index + 1}'];
        button.value = String.fromCharCode(97 + index); // Assign values a, b, c, d to the buttons
    });

}

function nextQuestion() {
    updateQuestionNumber(currentQuestion); // Update the current question number display
    if (currentQuestionIndex < quizLength) {
        renderQuestion();
    } else {
        showResults();
    }
}

/* function nextQuestion() {
    currentQuestionNumber.innerText = displayedQuestionNumber;
    displayedQuestionNumber++;
    currentQuestion++;
    buildQuestions();
    nextQuestionBtn.classList.add("greyscale");
    nextQuestionBtn.setAttribute("disabled", "disabled");
    nextQuestionBtn.classList.remove("hover");
    answer1.removeAttribute("disabled", "disabled");
    answer2.removeAttribute("disabled", "disabled");
    answer3.removeAttribute("disabled", "disabled");
    answer4.removeAttribute("disabled", "disabled");
    answer1.classList.add("answer-buttons-hover");
    answer2.classList.add("answer-buttons-hover");
    answer3.classList.add("answer-buttons-hover");
    answer4.classList.add("answer-buttons-hover");
    let answerButtons = document.getElementsByClassName("answer-btn");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("correct");
        answerButtons[i].classList.remove("wrong");
    }
}*/

function updateQuestionNumber(currentQuestionIndex) {
    const questionNumberElement = document.querySelector('.show-current-question');
    if (questionNumberElement) {
        questionNumberElement.innerText = currentQuestionIndex + 1; // Assuming index starts from 0
    }
}

// 1 second delay to enabling nextQuestionBtn

function showNextQuestionBtn() {
    setTimeout(function () {
        nextQuestionBtn.classList.remove("greyscale");
        nextQuestionBtn.removeAttribute("disabled");
        nextQuestionBtn.classList.add("hover");
    }, 1000);
}

// To display results

function showResults() {
    questionGameArea.classList.add("hide");
    resultsGameArea.classList.remove("hide");
    gameState = "results-game-area";
    // Display results logic here...
}



/** Checks if the player has answered 10 questions,
* if not will loop through the questions and display them to the player.
* Listens for the player's answer and then calls checkAnswer() to validate.
* Once all 10 questions have been answered, the gameState updates to resultsGameArea
* with the calculated score and relevant congratulatory message and trophy.
*/


function buildQuestions() {
    if (currentQuestion >= quizLength) {
        questionGameArea.classList.add("hide");
        resultsGameArea.classList.remove("hide");
        gameState = "results-game-area";
        if (answeredCorrect == 10) {
            document.getElementById("results-header").innerText = `${Excellent}`;
            silver.classList.add("hide");
            bronze.classList.add("hide");
            ded.classList.add("hide");
            gold.classList.remove("hide");
            document.getElementById("results-body-text").innerText = `You answered ${answeredCorrect}
            ${playerDifficulty} questions correct.`;
        } else if (answeredCorrect == 7 || answeredCorrect == 8 || answeredCorrect == 9) {
            document.getElementById("results-header").innerText = `${Great}`;
            silver.classList.remove("hide");
            bronze.classList.add("hide");
            ded.classList.add("hide");
            gold.classList.add("hide");
            document.getElementById("results-body-text").innerText = `You answered ${answeredCorrect}
            ${playerDifficulty} questions correct.`;
        } else if (answeredCorrect == 4 || answeredCorrect == 5 || answeredCorrect == 6) {
            document.getElementById("results-header").innerText = `${Nice}`;
            silver.classList.add("hide");
            bronze.classList.remove("hide");
            ded.classList.add("hide");
            gold.classList.add("hide");
            document.getElementById("results-body-text").innerText = `You answered ${answeredCorrect}
            ${playerDifficulty} questions correct.`;
        } else if (answeredCorrect <= 3) {
            document.getElementById("results-header").innerText = `${Fail}`;
            silver.classList.add("hide");
            bronze.classList.add("hide");
            ded.classList.remove("show");
            gold.classList.add("hide");
            document.getElementById("results-body-text").innerText = `You answered ${answeredCorrect}
            ${playerDifficulty} questions correct.`;
        } else {
            gameState = "question-game-area";
            for (let i = 0; i < currentQuestionSet.length; i++) {
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
}

// Validates the player's answer

        function checkAnswer() {
            answer1.setAttribute("disabled", "disabled");
            answer2.setAttribute("disabled", "disabled");
            answer3.setAttribute("disabled", "disabled");
            answer4.setAttribute("disabled", "disabled");
            answer1.classList.remove("answer-buttons-hover");
            answer2.classList.remove("answer-buttons-hover");
            answer3.classList.remove("answer-buttons-hover");
            answer4.classList.remove("answer-buttons-hover");

            let playerAnswer = this.value;
            let correctAnswer = currentQuestionSet[currentQuestionIndex].answer;
            if (playerAnswer === correctAnswer) {
                answerClicked = true;
                setColour = "correct";
                answeredCorrect++;
                showNextQuestionBtn();
            } else {
                answerClicked = true;
                setColour = "wrong";
                answeredWrong++;
                showNextQuestionBtn();
            }

            let answerButtons = document.getElementsByClassName("answer-btn");
            for (let i = 0; i < answerButtons.length; i++) {
                if (answerButtons[i].value === correctAnswer) {
                    answerButtons[i].classList.add("correct");
                } else if (playerAnswer !== correctAnswer) {
                    this.classList.add("wrong");
                }
            }
        }

/** Applies a colour to the element based on correct or wrong answer submitted */

// function setColourBlock() { }

console.log(easyQuestions);
console.log(hardQuestions);

/*jshint esversion: 6 */

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
const currentQuestionNumber = document.querySelector(".show-current-question");
const questionText = document.getElementById("question-text");
const goHome = document.getElementById("home-icon");
const playAgain = document.getElementById("play-again-btn");
const gold = document.getElementById("gold");
const silver = document.getElementById("silver");
const bronze = document.getElementById("bronze");
const ded = document.getElementById("ded");

let gameState = "start-game-area";
let displayedQuestionNumber = 1;
let currentQuestionIndex = 0;
let shuffledQuestions = [];
const quizLength = 10;
let currentQuestions = [];
let answerClicked = false;
let playerDifficulty;
let answeredCorrect = 0;
let answeredWrong = 0;

// Reloads the site

function reload() {
    location.reload();
}


// Event Listeners
document.getElementById("play").addEventListener("click", setDifficulty);
difficultyEasyBtn.addEventListener("click", function (event) {
    this.innerText = "Loading.."; // Change the button text
    setTimeout(function () {
        runQuiz(event); // Pass the event object to runQuiz
    }, 1000); // Wait for a second before running the quiz
});

difficultyHardBtn.addEventListener("click", function (event) {
    this.innerText = "Loading.."; // Change the button text
    setTimeout(function () {
        runQuiz(event); // Pass the event object to runQuiz
    }, 1000); // Wait for a second before running the quiz
});

goHome.addEventListener("click", reload);
nextQuestionBtn.addEventListener("click", nextQuestion);
playAgain.addEventListener("click", reload);

// Event listener for answer buttons
document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", checkAnswer);
});

// Event listener setup on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("difficulty-easy").addEventListener("click", () => startGame("easy"));
    document.getElementById("difficulty-hard").addEventListener("click", () => startGame("hard"));
    document.querySelectorAll(".answer-btn").forEach(button => {
        button.addEventListener("click", checkAnswer);
    });
});



function setDifficulty() {
    startGameArea.classList.add("hide");
    difficultyGameArea.classList.remove("hide");
    gameState = "difficulty-game-area";
}


/** Depending on what difficulty the player selects, this function will run the quiz */
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

    // Start the game
    startGame(difficulty);
}


// Fetch questions based on difficulty
function fetchData(difficulty) {
    if (difficulty === "easy") {
        return easyQuestions;
    } else if (difficulty === "hard") {
        return hardQuestions;
    }
    return [];
}

// Shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function renderQuestion(data) {
    if (!data) return;

    const questionText = document.getElementById("question-text");
    const answerButtons = document.querySelectorAll(".answer-btn");

    if (questionText) {
        questionText.textContent = data.question;
    }

    if (answerButtons.length) {
        answerButtons.forEach((button, index) => {
            const optionKey = String.fromCharCode(97 + index); // 'a', 'b', 'c', 'd'
            button.textContent = data[optionKey];
            button.value = optionKey; // Set button value to 'a', 'b', 'c', 'd'
            button.disabled = false; // Enable the button
            button.classList.add("answer-buttons-hover"); // Re-add hover class
        });
    }

    updateQuestionNumber(currentQuestionIndex);
}

// Start the game with selected difficulty
function startGame(difficulty) {
    // Fetch data based on difficulty
    currentQuestions = fetchData(difficulty);
    // Shuffle the questions
    currentQuestions = shuffleArray(currentQuestions);

    // Initialize game state
    currentQuestionIndex = 0;
    answeredCorrect = 0;
    answeredWrong = 0;
    answerClicked = false;

    // Render the first question
    renderQuestion(currentQuestions[currentQuestionIndex]);
}


function checkAnswer() {
    const answerButtons = document.querySelectorAll(".answer-btn");

    // Disable all answer buttons and remove hover class
    answerButtons.forEach(button => {
        button.setAttribute("disabled", "disabled");
        button.classList.remove("answer-buttons-hover");
    });

    // Get the player's selected answer and the correct answer
    const playerAnswer = this.value;
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;

    // Determine if the player's answer is correct or wrong
    let isCorrect = playerAnswer === correctAnswer;
    if (isCorrect) {
        answeredCorrect++;
    } else {
        answeredWrong++;
    }
    answerClicked = true;

    // Highlight correct and wrong answers
    answerButtons.forEach(button => {
        if (button.value === correctAnswer) {
            button.classList.add("correct");
        } else if (button.value === playerAnswer) {
            button.classList.add("wrong");
        }
    });

    // Show the next question button
    showNextQuestionBtn();
}

function nextQuestion() {
    if (currentQuestionIndex < quizLength - 1) {
        currentQuestionIndex++;
        displayedQuestionNumber++;
        renderQuestion(currentQuestions[currentQuestionIndex]);
        resetButtons();
        disableNextQuestionBtn();
    } else {
        showResults();
    }
}

// Function to update the question number display
function updateQuestionNumber(index) {
    const questionNumberElement = document.querySelector(".show-current-question");
    if (questionNumberElement) {
        questionNumberElement.innerText = index + 1; // Assuming index starts from 0
    }
}

// Function to reset answer buttons
function resetButtons() {
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.removeAttribute("disabled");
        button.classList.add("answer-buttons-hover");
        button.classList.remove("correct", "wrong");
    });
}

// Function to disable next question button
function disableNextQuestionBtn() {
    const nextQuestionBtn = document.getElementById("next-question");
    if (nextQuestionBtn) {
        nextQuestionBtn.classList.add("greyscale");
        nextQuestionBtn.setAttribute("disabled", "disabled");
        nextQuestionBtn.classList.remove("hover");
    }
}

// Function to show the next question button after a delay
function showNextQuestionBtn() {
    setTimeout(function () {
        const nextQuestionBtn = document.getElementById("next-question");
        if (nextQuestionBtn) {
            nextQuestionBtn.classList.remove("greyscale");
            nextQuestionBtn.removeAttribute("disabled");
            nextQuestionBtn.classList.add("hover");
        }
    }, 1000);
}

// To display results
function showResults() {
    questionGameArea.classList.add("hide");
    resultsGameArea.classList.remove("hide");
    gameState = "results-game-area";
    // Display results logic here...
}


function displayFinalResults() {
    if (currentQuestion >= quizLength) {
        questionGameArea.classList.add("hide");
        resultsGameArea.classList.remove("hide");
        gameState = "results-game-area

        if (answeredCorrect == 10) {
            document.getElementById("results-header").innerText = "Excellent";
            silver.classList.add("hide");
            bronze.classList.add("hide");
            ded.classList.add("hide");
            gold.classList.remove("hide");
        } else if (answeredCorrect == 7 || answeredCorrect == 8 || answeredCorrect == 9) {
            document.getElementById("results-header").innerText = "Great";
            silver.classList.remove("hide");
            bronze.classList.add("hide");
            ded.classList.add("hide");
            gold.classList.add("hide");
        } else if (answeredCorrect == 4 || answeredCorrect == 5 || answeredCorrect == 6) {
            document.getElementById("results-header").innerText = "Nice";
            silver.classList.add("hide");
            bronze.classList.remove("hide");
            ded.classList.add("hide");
            gold.classList.add("hide");
        } else if (answeredCorrect <= 3) {
            document.getElementById("results-header").innerText = "Fail";
            silver.classList.add("hide");
            bronze.classList.add("hide");
            ded.classList.remove("show");
            gold.classList.add("hide");
        }

        document.getElementById("results-body-text").innerText = 'You answered ${answeredCorrect} ${playerDifficulty} questions correct.';
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


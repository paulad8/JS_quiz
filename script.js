
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

//declare variables to store references

function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
    
    // variable to store the list of possible answers
          const answers = [];

          // and for each available answer...
          for (letter in currentQuestion.answers) {

              // ... add an HTML text box
              answers.push(
                  '<label>
                  < input type = "text" name ="question${questionNumber}">'
              )
          }
    }
    )

}

function showResults() { }

//run buildQuiz function immediately 
buildQuiz();

//on submit, show the result
submitButton.addEventListener('click', showResults);

//display the quiz questions
//using *object literals* to represent the individual questions and an array to hold all of the questions that make up the quiz, will be easier to iterate over//

const myQuestions = [

    {
        question: "It can be lost, given, stolen or broken may times in your life, yet if you are without it for a minute you will die. What is it?",

        correctAnswer: "HEART"
    },

    {
        question: "Add one word to make the following correct: 99 + 9 = 9 ",

        correctAnswer: "DOZEN"

    },

    {
        question: "Which 4-letter word links all of these? STEP  LOOSE  SORE  HOLD  LIGHTS",

        correctAnswer: "FOOT"

    }





];





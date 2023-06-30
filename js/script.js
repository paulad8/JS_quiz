
// Functions

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

                // ... add an HTML radio button
                answers.push(
                    `<label>
                  <input type = "radio" name = "question${questionNumber}" value = "${letter}" />
              ${letter} :
                  ${currentQuestion.answers[letter]}
                  </label>`
                );
            }

            // add this question and its answers to the output by using template literals
            /*  using a template literal and some embedded expressions to first create the question div and then create the answer div */
        /* the 'join' expression takes the list of answers and puts them together in one string that can be output into the 'answers' div */

            output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
              </div>`
            );
        }
    );

    //finally, combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {

// gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // colour the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }

        // if answer is wrong or blank
        else {
            // colour the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

}

// declare variables to store references
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

//display the quiz questions
/* using *object literals* to represent the individual questions and an array to hold all of the questions that make up the quiz, will be easier to iterate over */

const myQuestions = [

    {
        question: "Where are the Whitsunday Islands located?",
        answers: {
            a: "Malaysia",
            b: "Vietnam",
            c: "Philippines",
            d: "Australia"
        },
        correctAnswer: "d"
    },

    {
        question: "Which of these countries ISN’T landlocked?",
        answers: {
            a: "Nepal",
            b: "Turkey",
            c: "Armenia",
            d: "Austria"
        },
        correctAnswer: "b"

    },

    {
        question: "The Spanish Steps are found in which city?",
        answers: {
            a: "Rome",
            b: "Barcelona",
            c: "Madrid",
            d: "Lisbon"
        },
        correctAnswer: "a"

    },

    {
        question: "Which two countries in South America are the Iguazu Falls part of?",
        answers: {
            a: "Ethiopia and Kenya",
            b: "Panama and Chile",
            c: "Brazil and Argentina",
            d: "Colombia and Brazil"
        },
        correctAnswer: "c"
    },

    {
        question: "Which of these is NOT a South African national park? ",
        answers: {
            a: "Addo Elephant Park",
            b: "Kruger National Park",
            c: "Table Mountain National Park",
            d: "Goreme National Park"
        },
        correctAnswer: "d"
    },

    {
        question: "Where in the Middle East is the ancient city of Petra?",
        answers: {
            a: "Qatar",
            b: "Jordan ",
            c: "Egypt",
            d: "Morocco"
        },
        correctAnswer: "b"
    },

    {
        question: "The Aruba Caribbean island is a territory of which European country?",
        answers: {
            a: "France",
            b: "Netherlands",
            c: "Finland",
            d: "Croatia"
        },
        correctAnswer: "b"
    },

    {
        question: "What is the capital of Canada?",
        answers: {
            a: "Toronto",
            b: "Vancouver",
            c: "Ottawa",
            d: "Halifax"
        },
        correctAnswer: "c"
    },

    {
        question: "Hanoi is the capital of which country?",
        answers: {
            a: "Cambodia",
            b: "Laos",
            c: "Thailand",
            d: "Vietnam"
        },
        correctAnswer: "d"
    },

    {
        question: "Which of these buildings is the tallest? ",
        answers: {
            a: "The Shard, London",
            b: "Tokyo Skytree, Tokyo",
            c: "Burj Kalifa, Dubai",
            d: "Ostankino Tower, Moscow"
        },
        correctAnswer: "c"
    },

    {
        question: "The Baltic States refer to which countries?",
        answers: {
            a: "Iceland, Norway, UK",
            b: "Poland, Czech Republic, Austria",
            c: "Estonia, Latvia, Lithuania",
            d: "Croatia, Slovenia, Italy"
        },
        correctAnswer: "c"
    },

    {
        question: "Which city is home to the Brandenburg Gate?",
        answers: {
            a: "Vienna",
            b: "Bruge",
            c: "Zurich",
            d: "Berlin"

        },
        correctAnswer: "d"
    },

    {
        question: "Where was the first example of paper money used?",
        answers: {
            a: "China",
            b: "Greece",
            c: "Turkey",
            d: "Britannia"
        },
        correctAnswer: "a"
    },

    {
        question: "Which language has the longest alphabet?",
        answers: {
            a: "Greek",
            b: "Arabic",
            c: "Roman",
            d: "Russian"
        },
        correctAnswer: "d"
    },

    {
        question: "Which of the following was considered one of the Seven Ancient Wonders?",
        answers: {
            a: "Colosseum",
            b: "Great Wall of China",
            c: "Colossus of Rhodes",
            d: "Ancient city of Ephesus"
        },
        correctAnswer: "c"
    },
];

// Kick things off 
buildQuiz();

// Event listener: on submit, show the result
submitButton.addEventListener('click', showResults);



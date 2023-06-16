
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
                  < input type = "radio" name = "question${questionNumber}" value = "${letter}" />
              ${letter} :
                  ${currentQuestion.answers[letter]}
                  </label>`
                );
            }

            // add this question and its answers to the output by using template literals
            /*  using a template literal and some embedded expressions to first create the question div and then create the answer div */
        /* the 'join' expression takes the list of answers and puts them together in one string that can be output into the 'answers' div */

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>`
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
const resultsContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

//display the quiz questions
/* using *object literals* to represent the individual questions and an array to hold all of the questions that make up the quiz, will be easier to iterate over */

const myQuestions = [

    {
        question: "What is the name of the company that published the Mario Kart video game?",
        answers: {
            a: "Nintendo",
            b: "Electronic Arts (EA)",
            c: "SEGA",
            d: "Xbox"
        },
        correctAnswer: "a"
    },

    {
        question: "How many elements are there on a periodic table?",
        answers: {
            a: "112",
            b: "118",
            c: "120",
            d: "143"
        },
        correctAnswer: "b"

    },

    {
        question: "In the U.S version of The Office, Michael Scott burns his foot on: ",
        answers: {
            a: "hot water",
            b: "pavement/cement",
            c: "rocks on fire",
            d: "a George Foreman Grill"
        },
        correctAnswer: "d"

    },

    {
        question: "Which actor performs music under the stage name Childish Gambino?",
        answers: {
            a: "Donald Glover",
            b: "Will Smith",
            c: "Frank Ocean",
            d: "Tyler, The Creator"
        },
        correctAnswer: "a"
    },

    {
        question: "As an adult, how many teeth should you have in your mouth?",
        answers: {
            a: "35",
            b: "32",
            c: "30",
            d: "42"
        },
        correctAnswer: "b"
    },

    {
        question: "Which country held the 2016 Summer Olympics?",
        answers: {
            a: "China",
            b: "Ireland",
            c: "Brazil",
            d: "italy"
        },
        correctAnswer: "c"
    },

    {
        question: "Who painted the Sistine Chapel ceiling?",
        answers: {
            a: "Picasso",
            b: "Da Vinci",
            c: "Michaelangelo",
            d: "Van Gogh"
        },
        correctAnswer: "c"
    },

    {
        question: "In 2016, a musician won the Nobel Peace Prize for Literature. Who was it?",
        answers: {
            a: "Lenny Kravitz",
            b: "Eric Clapton",
            c: "Bob Dylan",
            d: "Elton John"
        },
        correctAnswer: "c"
    },

    {
        question: "What is Sodium Chloride?",
        answers: {
            a: "Salt",
            b: "Sugar",
            c: "Chlorine",
            d: "Bleach"
        },
        correctAnswer: "a"
    },

    {
        question: "How many time zones are there in the world?",
        answers: {
            a: "7",
            b: "24",
            c: "23",
            d: "9"
        },
        correctAnswer: "b"
    },

    {
        question: "What is the deadliest snake?",
        answers: {
            a: "Python",
            b: "Cobra",
            c: "Eastern Brown Snake",
            d: "Black Mamba"
        },
        correctAnswer: "d"
    },

    {
        question: "In Greek mythology, who is the Queen of the Underworld?",
        answers: {
            a: "Pandora",
            b: "Medusa",
            c: "Helen",
            d: "Persephone"

        },
        correctAnswer: "b"
    },

    {
        question: "Which biblical narrative is connected to Palm Sunday?",
        answers: {
            a: "Jesus' entry into Jerusalem",
            b: "Jesus' resurrection",
            c: "Jesus feeding the thousands",
            d: "Nothing, it just means to go to church on Sunday - the day of rest"
        },
        correctAnswer: "a"
    },

    {
        question: "Which planet is the hottest?",
        answers: {
            a: "Venus",
            b: "Saturn",
            c: "Mercury",
            d: "Mars"
        },
        correctAnswer: "a"
    },

    {
        question: "Which poet wrote the poem 'The Raven'?",
        answers: {
            a: "Robert Frost",
            b: "Edgar Allan Poe",
            c: "Walt Whitman",
            d: "Sylvia Plath"
        },
        correctAnswer: "b"
    },
];

// Kick things off 
buildQuiz();

// Event listener: on submit, show the result
submitButton.addEventListener('click', showResults);



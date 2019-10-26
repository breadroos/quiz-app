/*jshint esversion: 6 */

// creating an object named store which will have a three keys: questions, score, currentQuestion.
const STORE = {
  //start at the start of the object
  currentQuestion: 0,
  questions: [
    //each of the objects in the array will have 3 keys: questions, options, and the answer.
    // QUESTION: 1
    {
      //question will be a single string with the question for the Quiz
      question: "What type of whale is the biggest animal in the world?",
      // options is going to have an array of data that has the multiple choice options for the question.
      options: [
        "Killer Whale",
        "Blue Whale",
        "Sperm Whale",
        "Humpback Whale"
      ],
      // answer will be a single string with the answer that we can compare the option selected to
      answer: "Blue Whale"
    },
    // QUESTION: 2
    {
      question: "Who was nicknamed “Trey” (Three in card terminology), when he was young?",
      options: [
        "Bill Gates",
        "Donald Trump",
        "Mark Zuckerberg",
        "Kevin Bacon",
      ],
      answer: "Bill Gates"
    },
    // QUESTION: 3
    {
      question: "His tomb in France reads “He taught us how to become free” as his writings were instrumental in creating a spirit of freedom during the French Revolution. Who was he?",
      options: [
        "NAPOLEON BONAPARTE",
        "LOUIS ANTOINE DE SAINT-JUST",
        "VOLTAIRE",
        "EMMANUEL JOSEPH SIEYÈS",
      ],
      answer: "VOLTAIRE"
    },
    // QUESTION: 4
    {
      question: "Which first electrical item did Thomas Edison invent?",
      options: [
        "Cell Phone",
        "Analog Clocks",
        "Lightbulb",
        "Dishwasher"
      ],
      answer: "Lightbulb"
    },
    {
      // QUESTION: 5
      question: "Who hunts most – male or female lion?",
      options: [
        "Male",
        "Female",
        "Both hunt an equal amount",
        "It varies depending on the season"
      ],
      answer: "Female"
    },
  ],
  HTML: {
    correct: `<div class="correct-container">
                <span class="right-answer">Correct!</span>
              </div>`,
    incorrect: function(correctOption) {
                return `<div class="wrong-container">
                  <span class="wrong-answer">Inorrect! The right answer is option ${correctOption}.</span>
                </div>`;
      }
  }
};

// ----------------------------------------------------------------

$(function startQuiz() {
  //when the user clicks on the start-quiz-button run a function that will render a question for them.
  $('.start-quiz-button').on('click', function(event) {
    console.log('The start button is working');
    renderQuestion();
  });
});

function renderQuestion() {
  console.log('the start button is telling me to render a question.');
  questionSubmit();
  $('.description-container').replaceWith(`<div class="question-container">
    <div class="quiz-title">
      General Trivia Quiz!
    </div>

    <div class="score-and-question-wrapper">
      <div class="current-question">
        Question: 1/5
      </div>
      <div class="score">
        Current score: 0/15
      </div>
    </div>

    <div class="question-box-title">
      ${STORE.questions[0].question}
    </div>
    <!-- specifics of what the basic trivia pertains to -->
      <div class="question-box-content">
        <form action="" class="question-options">
          <div class="question-radio-options">
            <div class="Options">
              <div class="option-1">
              <input type="radio" name="option" value="${STORE.questions[0].options[0]}" id="option-1">
              <label for="option-1">${STORE.questions[0].options[0]}</label>
            </div>
            <div class="option-2">
              <input type="radio" name="option" value="${STORE.questions[0].options[1]}" id="option-2">
              <label for="option-2">${STORE.questions[0].options[1]}</label>
            </div>
            <div class="option-3">
              <input type="radio" name="option" value="${STORE.questions[0].options[2]}" id="option-3">
              <label for="option-3">${STORE.questions[0].options[2]}</label>
            </div>
            <div class="option-4">
              <input type="radio" name="option" value="${STORE.questions[0].options[3]}" id="option-4">
              <label for="option-4">${STORE.questions[0].options[3]}</label>
            </div>
          </div>
            <input type="submit" name="submit-button" class="question-submit-button" value="Submit">
        </form>
      </div>
    </div>
  </div>
`);
  //need to find a question from the store.js file, and then render the html on the page for the user.
}

//this function is supposed to run whenever a user chooses a radio option.
//it should be preventing a page reload, and console logging the value of the answer that they have selected.
function checkAnswer(event) {
  event.preventDefault();
  console.log('checking answer..');
  var $selectedInput = $('input:checked');
  var $selectedLabel = $('input:checked').parent().find('label');
  var userAnswer = $selectedInput.val();
  console.log('The selected answer is: '+userAnswer);
  if(userAnswer === STORE.questions[STORE.currentQuestion].answer) {
    $selectedLabel.append(STORE.HTML.correct);
  } else {
    $selectedLabel.append(STORE.HTML.incorrect);
  }
}

// var userAnswer = $('input:checked').val();

function questionSubmit() {
  console.log('questionSubmit function is running');
  $(document).on('submit', '.question-options', checkAnswer);
}

// -on click store their answers - DONE

// -if the answer matches the answer in store, show the correct message
// -else show the incorrect message, with the right answer

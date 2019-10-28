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

function renderQuestion(questionID) {
  $('.description-container').replaceWith(getQuestionHtml(STORE.currentQuestion));
  $(".question-submit-button").click(function(e) {
    e.preventDefault();
    checkAnswer();
  });
  //need to find a question from the store.js file, and then render the html on the page for the user.
}

function getQuestionHtml(questionID) {
  questionSubmit();
  var question = STORE.questions[questionID];
  var options = question.options;
  return `<div class="question-container">
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
      ${question.question}
    </div>
    <!-- specifics of what the basic trivia pertains to -->
      <div class="question-box-content">
        <form action="" class="question-options">
          <div class="question-radio-options">
            <div class="Options">
              ${options.map((option, i) => `
                <div class="option-${i+1}">
                  <input type="radio" name="option" value="${option}" id="option-${i+1}">
                  <label for="option-${i+1}">${option}</label>
                </div>`).join('')}
            </div>
            <input type="submit" name="submit-button" class="question-submit-button" value="Submit">
        </form>
      </div>
    </div>
  </div>`;
}

function checkAnswer(event) {
  event.preventDefault();
  console.log('checking answer..');
  var $selectedInput = $('input:checked');
  var $selectedLabel = $('input:checked').parent().find('label');
  var userAnswer = $selectedInput.val();
  console.log('The selected answer is: ' + userAnswer);
  if (userAnswer === STORE.questions[STORE.currentQuestion].answer) {
    $selectedLabel.append(STORE.HTML.correct);
  } else {
    $selectedLabel.append(STORE.HTML.incorrect);
  }
}

function questionSubmit() {
  console.log('questionSubmit function is running');
  $(document).on('submit', '.question-options', checkAnswer);
}

function nextQuestion() {
  if(currentQuestion <= STORE.questions.length){
    renderQuestion();
  } else {
    // display the final score screen
  }
}

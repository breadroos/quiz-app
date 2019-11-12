/*jshint esversion: 6 */
// creating an object named store which will have a three keys: questions, score, currentQuestion.
const STORE = {
  // start at the start
  currentQuestion: 0,
  score: 0,
  // inside of the store object there is one key, that key has a value of an array of data. inside of that array there are objects for each of the index items.
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
      question: "Who was nicknamed Trey (Three in card terminology), when he was young?",
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
      question: "His tomb in France reads 'He taught us how to become free' as his writings were instrumental in creating a spirit of freedom during the French Revolution. Who was he?",
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

$(document).ready(init);

function init() {
  addListners();
}

function addListners() {

  console.log('adding listener bois');
  $('.start-quiz-button').on('click', function(event) {
    console.log('Start Button Clicked, rendering question...');
    renderQuestion();
  });
}

function startQuiz() {
  console.log("Starting Quiz...");
  //when the user clicks on the start-quiz-button run a function that will render a question for them.
}

function renderQuestion() {
  console.log('Render question started.');
  // questionSubmit();
  //need to find a question from the store.js file, and then render the html on the page for the user.
  $('.description-container').replaceWith(getQuestionHtml(STORE.currentQuestion));
  $("#question-submit-button").on('click',function(e) {
    e.preventDefault();
    // checkAnswer();
    console.log('Checking answer.');
    event.preventDefault();
    var $selectedInput = $('input:checked');
    var $selectedLabel = $('input:checked').parent().find('label');
    var userAnswer = $selectedInput.val();
    console.log("Got answer:\n" + userAnswer);
    if(!userAnswer) {
          alert('Please Select One');
    } else if (userAnswer === STORE.questions[STORE.currentQuestion].answer) {
      //display the correct message
      $selectedLabel.append(STORE.HTML.correct);
      STORE.score++;
      $('#next-button').show();
      $('#question-submit-button').hide();
      STORE.currentQuestion++;
    } else {
      //display that the answer is incorrect, and then add in the correct answer to the question.
      $selectedLabel.append(STORE.HTML.incorrect(STORE.questions[STORE.currentQuestion].answer));
      $('#next-button').show();
      $('#question-submit-button').hide();
      STORE.currentQuestion++;
    }
    console.log('adding next button listener');
    $('#next-button').on('click', function(event) {
          console.log('next-button was clicked');
          if(STORE.currentQuestion === STORE.questions.length) {
            console.log('if was met');
            displayFinalScreen();
            $('#restart-quiz-button').on('submit', renderQuestion);
          } else {
            console.log('else was met');
            renderQuestion();
          }
    });
  });
}

function getQuestionHtml(questionID) {
  console.log('getOptionHtml is running');
  var question = STORE.questions[STORE.currentQuestion];
  var options = question.options;
  const questionHTML = $(`<div class="question-container">
    <div class="quiz-title">
      General Trivia Quiz!
    </div>

    <div class="score-and-question-wrapper">
      <div class="current-question">
        Question: ${STORE.currentQuestion+1}/5
      </div>
      <div class="score">
        Current score: ${STORE.score}/5
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
            <button type="submit" name="submit-button" id="question-submit-button">Submit</button>
            <button type="button" name="next-button" id="next-button">Next</button>
            <button type="button" name="restart-quiz-button" id="restart-quiz-button">Restart!</button>
        </form>
      </div>
    </div>
  </div>`);
  $('main').html(questionHTML);
  $('#next-button').hide();
  $('#restart-quiz-button').hide();
}

function displayFinalScreen() {
  console.log('display final screen');
  $('main').replaceWith(`<main>
    <!-- this is the title of the quiz app, and has been given a class to match that description -->
  <div class="question-container">
    <div class="quiz-title">
      General Trivia Quiz!
    </div>

    <div class="score-and-question-wrapper">
      <div class="current-question">
        Question: ${STORE.currentQuestion}/5
      </div>
      <div class="score">
        Current score: ${STORE.score}/5
      </div>
    </div>
    <div class="question-box-title-final">
      Your Final Score: ${STORE.score}/5
    </div>
    <div class="restart-button-container">
      <button id="restart-quiz-button">
      Restart Quiz
      </button>
    </div>
  </main>`);
  $('#restart-quiz-button').on('click', function(){
    window.location.reload();
  });
}

//------------------------GRAVEYARD------------------------

//this function is supposed to run whenever a user chooses a radio option.
//it should be preventing a page reload, and console logging the value of the answer that they have selected.
// function checkAnswer() {
//   console.log('Checking answer.');
//   var $selectedInput = $('input:checked');
//   var $selectedLabel = $('input:checked').parent().find('label');
//   var userAnswer = $selectedInput.val();
//   console.log("Got answer:\n" + userAnswer);
//   if (userAnswer === STORE.questions[STORE.currentQuestion].answer) {
//     //display the correct message
//     $selectedLabel.append(STORE.HTML.correct);
//   } else {
//     //display that the answer is incorrect, and then add in the correct answer to the question.
//     $selectedLabel.append(STORE.HTML.incorrect(STORE.questions[STORE.currentQuestion].answer));
//   }
// }

// function questionSubmit() {
//   console.log('questionSubmit started');
//   var userAnswer = $('input:checked').val();
//   $(document).on('submit', '.question-options', function () {
//     console.log('Checking answer.');
//     event.preventDefault();
//     var $selectedInput = $('input:checked');
//     var $selectedLabel = $('input:checked').parent().find('label');
//     var userAnswer = $selectedInput.val();
//     console.log("Got answer:\n" + userAnswer);
//     if (userAnswer === STORE.questions[STORE.currentQuestion].answer) {
//       //display the correct message
//       $selectedLabel.append(STORE.HTML.correct);
//       console.log('updating the score');
//       STORE.score++;
//     } else {
//       //display that the answer is incorrect, and then add in the correct answer to the question.
//       $selectedLabel.append(STORE.HTML.incorrect(STORE.questions[STORE.currentQuestion].answer));
//     }
//     STORE.currentQuestion++;
//   });

  // function verifyAnswer() {
  //   if (userAnswer === STORE.questions.question[0].answer[0]) {
  //     //display the correct message
  //     $('input:checked').append(STORE.HTML.correct);
  //     STORE.score++;
  //   } else {
  //     //display that the answer is incorrect, and then add in the correct answer to the question.
  //     $('input:checked').append(STORE.HTML.incorrect);
  //   }
  //   console.log('verifyAnswer function is running.');
  // }

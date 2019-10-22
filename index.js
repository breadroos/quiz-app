function startQuiz() {
  //when the user clicks on the start-quiz-button run a function that will render a question for them.
  $('.start-quiz-button').on('click', function(event) {
    renderQuestion();
  }
);
}

function currentQuestionAndScore(){
  //track the users current score, and the question # that they are on.
  const html = $(`
    <div class="score-and-question-wrapper">
      <div class="current-question">
        Question: ${STORE.currentQuestion + 1}/${STORE.questions.length}
      </div>
      <div class="score">
        Current score: ${STORE.score}/${STORE.questions.length}
      </div>
    </div>
    `);
    $('.score-and-question-wrapper').html(html);
}

function renderQuestion(){
  //need to find a question from the store.js file, and then render the html on the page for the user.
  let question = STORE.questions[STORE.currentQuestion];
  currentQuestionAndScore();
  //need to figure out how to merge in the question values into the options on the page, using the current question and each of the options in the form needs to have the template string for the option itself.
  let questionHTML = $(`
      <div class="question-box-title">
        LOAD IN A QUESTION FROM STORE.JS HERE.
      </div>
      <!-- specifics of what the basic trivia pertains to -->
        <div class="question-box-content">
          <form action="" class="question-options">
            <div class="question-radio-options">
              <div class="option-1">
                <div class="option-1">
                <input type="radio" name="option" value="You can do it this way." id="option-1">
                <label for="option-1">LOAD IN A QUESTION OPTION FROM STORE.JS HERE</label>
              </div>
              <div class="option-2">
                <input type="radio" name="option" value="You can do it this way as well." id="option-2">
                <label for="option-2">LOAD IN A QUESTION OPTION FROM STORE.JS HERE</label>
              </div>
              <div class="option-3">
                <input type="radio" name="option" value="You could even do it this way if you wanted." id="option-3">
                <label for="option-3">LOAD IN A QUESTION OPTION FROM STORE.JS HERE</label>
              </div>
              <div class="option-4">
                <input type="radio" name="option" value="Even better yet, this way." id="option-4">
                <label for="option-4">LOAD IN A QUESTION OPTION FROM STORE.JS HERE</label>
              </div>
            </div>
              <input type="submit" name="submit-button" class="question-submit-button" value="Submit">
          </form>
        </div>
      </div>
    `)
};
function scoreTracker(){
  //might try to combine this with the question tracker??
};
function checkAnswer(){
  //this function needs to check whether the answer selected matches that of the answer for the question that was pulled from store. there is a key for the answer in there to check the answer against.
};
function checkRemainingQuestions(){
  //this function should check to see if there is another question that can be used, or if they should be taken to the final score screen.
};
function restartQuiz(){
  //this should restart the users score, change the current question back to 1, and then render a new question for the user to start with.
};
function oneToHandleThemAll(){
  //this function will run all the prior functions potentially, might have them run independently.
};



//
// function isCorrect(choice, q) {
//   return choice.value === STORE.answers[q];
// }

// creating an object named store which will have a three keys: questions, score, currentQuestion.
const STORE = {
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
};

// --------------------------------------------------------------------------------
$(document).ready(function() {
      init();
    });

    function init() {
      addListeners();
    }

    function addListeners() {

      $(function startQuiz() {
        //when the user clicks on the start-quiz-button run a function that will render a question for them.
        $('.start-quiz-button').on('click', function(event) {
          console.log('The start button is working');
          renderQuestion();
        });
      });

      function renderQuestion() {
        console.log('the start button is telling me to render a question.');
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


      function checkAnswer(event) {
        event.preventDefault();
        console.log('The checkAnswer function is running.')
        var userAnswer = $('input:checked').val();
        $('document').ready(function() {
          $("input[type='button']").click(function() {
            console.log(userAnswer);
          });
        });

        console.log('the check answer function is running');

        function verifyAnswer() {
          if (userAnswer === STORE.questions.question[0].answer[0]) {
            //display the correct message
            $('input:checked').append(`
      <div class="correct-container">
        <span class="right-answer">Correct!</span>
      </div>`);
          } else {
            //display that the answer is incorrect, and then add in the correct answer to the question.
            $('input:checked').append(`
      <div class="wrong-container">
        <span class="wrong-answer">Inorrect! The right answer is option 3.</span>
      </div>
      `);
          }
          console.log('verifyAnswer function is running.')
        }
      }

    }

    function init() {
      console.log('init function is running')
      $(document).on('submit', '.question-options', checkAnswer);
    }

    init();
    // -on click store their answers

    // -if the answer matches the answer in store, show the correct message
    // -else show the incorrect message, with the right answer




    // $(function nextQuestion() {
    //   //this moves them on to the next question
    //   $('.question-submit-button').on('click', function(event) {
    //     console.log('this is a new question, the function is working.');
    //     $('.question-container').replaceWith(`<div class="question-container">
    //       <div class="quiz-title">
    //         General Trivia Quiz!
    //       </div>
    //
    //       <div class="score-and-question-wrapper">
    //         <div class="current-question">
    //           Question: 1/5
    //         </div>
    //         <div class="score">
    //           Current score: 0/15
    //         </div>
    //       </div>
    //
    //       <div class="question-box-title">
    //         What is the best way to have an example question box?
    //       </div>
    //       <!-- specifics of what the basic trivia pertains to -->
    //         <div class="question-box-content">
    //           <form action="" class="question-options">
    //             <div class="question-radio-options">
    //               <div class="options">
    //                 <div class="option-1">
    //                 <input type="radio" name="option" value="You can do it this way." id="option-1">
    //                 <label for="option-1">You can do it this way.</label>
    //               </div>
    //               <div class="option-2">
    //                 <input type="radio" name="option" value="You can do it this way as well." id="option-2">
    //                 <label for="option-2">You can do it this way as well.</label>
    //               </div>
    //               <div class="option-3">
    //                 <input type="radio" name="option" value="You could even do it this way if you wanted." id="option-3">
    //                 <label for="option-3">You could even do it this way if you wanted.</label>
    //               </div>
    //               <div class="option-4">
    //                 <input type="radio" name="option" value="Even better yet, this way." id="option-4">
    //                 <label for="option-4">Even better yet, this way.</label>
    //               </div>
    //             </div>
    //               <input type="submit" name="submit-button" class="question-submit-button" value="Submit">
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //     `);
    //   });
    // });


    // function scoreTracker(){
    //   //might try to combine this with the question tracker??
    // };
    // function restartQuiz(){
    //   //this should restart the users score, change the current question back to 1, and then render a new question for the user to start with.
    // };
    // function oneToHandleThemAll(){
    //   //this function will run all the prior functions potentially, might have them run independently.
    // };

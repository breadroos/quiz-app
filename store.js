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
    }
  ],
  score: 0,
  currentQuestion: 0
};

//
//
// var STORE = {
//   questions = [
//     {
//       Q: "Question 1?",
//       Options: [
//         "Opt1",
//         "Opt2",
//         "Opt3",
//       ],
//       A: "Opt1"
//     },
//     {},
//     {}
//   ]
// }
//
// `
// <input type="dropdown">
//   <option value=${question.option}
// </input>
// `
// // Add inputField
// var $inputField = $("<input>");
//
// // add questions to input
// for(question in questions) {
//   renderQuestion(inputField, STORE.questions[i].option)
// }
//
// function renderQuestion($inf, opt) {
//   $inf.append(`<option value="${opt}">"`);
// }
//
// arr = [
//   ["value a 1" /* i0, j0*/, "value a 2" /*i0, j1*/], // i = 0
//   ["value b 1" /* i1, j0*/, "value b 2" /*i1 j1*/] // i = 1
// ]
//
// for (i in arr) {
//   printValuesOfArr(arr[i])
//   // for (j in arr[i]) {
//   //
//   // }
// }
//
// printValuesOfArr(arr) {
//   for (i in arr) {
//     console.log[i];
//   }
// }

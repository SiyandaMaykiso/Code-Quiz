
//Main Var Elements: // Below are the multiple choice questions and their answers


const quizContainer = document.getElementById('quiz');
             const resultsContainer = document.getElementById('results');
             const submitButton = document.getElementById('submit');


             function buildQuiz(){}

function showResults(){}

// Display Quiz 
buildQuiz();

// To Submit & Show Results
submitButton.addEventListener('click', showResults);


const myQuestions = [
    {
      question: "What does HTML stands for?",
      answers: {
        a: "Hypertext Machine language",
        b: "Hypertext and links markup language",
        c: "Hypertext Markup Language"  
    
      },
      correctAnswer: "c"
    },
    {
      question: "How is document type initialized in HTML5.?",
      answers: {
        a: "</DOCTYPE HTML>",
        b: "</DOCTYPE>",
        c: "<!DOCTYPE HTML>"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following HTML Elements is used for making any text bold?",
        a: "<p>",
        b: "<i>",
        c: "<li>",
        d: "<b>",
      },
      {
      correctAnswer: "d"

      },
      {

      question: "Which of the following HTML element is used for creating an unordered list??",
      answers: {
        a: "<ui>",
        b: "<i>",
        c: "<ul>",  
    
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following attributes is used to open an hyperlink in new tab?",
      answers: {
        a: "tab",
        b: "href",
        c: "target",
      },
      correctAnswer: "c"
    },
    {
      question: "What is the purpose of using div tags in HTML?",
        a: "For creating Different styles",
        b: "For adding headings",
        c: "For adding titles",
        d: "For creating different sections",
      },
      {
      correctAnswer: "d"
    }
  ];

// Further Var Elements

var timeLeft = 30;
    var quizQuestions = document.getElementById("Start Quiz-Questions");
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' Seconds Remaining';
        timeLeft--;
      }
    }
<div id="Quiz Questions">
</div>

//Function Commands
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("Local Time").innerHTML = d.toLocaleTimeString();

}




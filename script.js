(function(){
    // Functions
    function buildQuiz(){

      // Variable to store the HTML output
      const output = [];
  
      // This is for each question
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {

          // This Variable is to store the list of possible answers
          const answers = [];

          // This is for each available answer
          for (letter in currentQuestion.answers) {

            // This is the HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }

          // This is for the output of questions and answers
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // This is to combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // This will gather the answers
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // This helps track the user's answers
      let numCorrect = 0;
  
      // Each Question
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // To help find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // If the answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // This will add to the number of correct answers
          numCorrect++;
  
          // This will color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // If the answer is wrong or blank
        else{
          // The color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // This will show the number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // More Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
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
              answers: {
                a: "<p>",
                b: "<i>",
                c: "<li>",
                d: "<b>",
              },
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
              answers: {
                a: "For creating Different styles",
                b: "For adding headings",
                c: "For adding titles",
                d: "For creating different sections",
              },
              correctAnswer: "d"
            }
          ];
        
  
    // Starts Quiz
    buildQuiz();
  
    // Directions for the user
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // This shows the first slide
    showSlide(currentSlide);
  
    // These are the Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    
    // Below is the timer

    window.onload = function() {
        var minute = 5;
        var sec = 60;
        setInterval(function() {
          document.getElementById("timer").innerHTML = minute + " : " + sec;
          sec--;
          if (sec == 00) {
            minute --;
            sec = 60;
            if (minute == 0) {
              minute = 5;
            }
          }
        }, 1000);
      }
})();
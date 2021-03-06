
//To hide the Main Page in order to proceed to the Question Area
function myFunction() {
    var x = document.getElementById("main-image");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

window.addEventListener("keydown", event => {
    if (event.keydown == 13) {
    document.querySelector("#quizzes").style.display = "block"
    }
  })

// QUESTIONS
const questions = [
    {
      "question": "Innocence",
      "answer1": "I am innocent in alot of things",
      "answer1Total": "1",
      "answer2": "I am not that innocent as you think I am",
      "answer2Total": "2",
      "answer3": "I think I am well versed with my surroundings",
      "answer3Total": "3"
    },
    {
      "question": "Training",
      "answer1": "I need to be trained with a group of people",
      "answer1Total": "1",
      "answer2": "I don't need training, just supervision",
      "answer2Total": "3",
      "answer3": "I need to be trained one to one",
      "answer3Total": "2"
    },
    {
      "question": "Learning",
      "answer1": "I still have a lot to learn",
      "answer1Total": "1",
      "answer2": "I learn more when I see and feel",
      "answer2Total": "2",
      "answer3": "I am a fast learner",
      "answer3Total": "3"
    },
    {
      "question": "Do you like Exploration and Medicine?",
      "answer1": "No",
      "answer1Total": "1",
      "answer2": "Somewhat",
      "answer2Total": "2",
      "answer3": "Yes",
      "answer3Total": "3"
    },
    {
      "question": "I work better with my hands and mind (Agricultural and Education).",
      "answer1": "Disagree",
      "answer1Total": "1",
      "answer2": "Agree",
      "answer2Total": "2",
      "answer3": "Exceptionally Agree",
      "answer3Total": "3"
    },
    {
      "question": "What is your understanding of the Force?",
      "answer1": "I have limited idea, needs to learn more",
      "answer1Total": "1",
      "answer2": "I know some and can practice some",
      "answer2Total": "2",
      "answer3": "I have good knowledge, but not exceptional",
      "answer3Total": "3"
    },
    {
      "question": "What is your idea of peace?",
      "answer1": "I keep peace in mind and body and in turn in actions and words",
      "answer1Total": "3",
      "answer2": "I enjoying keeping the peace with actions, not just with words",
      "answer2Total": "2",
      "answer3": "I intend not to create any misunderstandings",
      "answer3Total": "1"
    },
    {
      "question": "Leadership Skills",
      "answer1": "I see myself as a diplomat or someone working in the government",
      "answer1Total": "2",
      "answer2": "I see myself as a follower rather than a leader",
      "answer2Total": "1",
      "answer3": "I see myself able to train self and others",
      "answer3Total": "3"
    },
    {
      "question": "Lightsaber?",
      "answer1": "Yes, I can use it",
      "answer1Total": "1",
      "answer2": "Yes, and different weapons, too",
      "answer2Total": "3",
      "answer3": "Yes, I can show it",
      "answer3Total": "2"
    },
    {
      "question": "What do you think about assassins?",
      "answer1": "They are part of the dark-side of the force",
      "answer1Total": "1",
      "answer2": "They are Jedis in disguise",
      "answer2Total": "2",
      "answer3": "They can be either an ally or an enemy",
      "answer3Total": "3"
      }, 
      {
      "question": "Do you believe that the Force exists?",
      "answer1": "Yes, In body and Spirit",
      "answer1Total": "1",
      "answer2": "Yes, In light and darkness",
      "answer2Total": "2",
      "answer3": "Yes, In life and in death",
      "answer3Total": "3"
      },
  ]
  
  
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  
  //Function to generate question 
  function generateQuestions (index) {
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      //Populate html elements 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      ////Add the answer score to the score array
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      const totalScore = score.reduce((total, currentNum) => total + currentNum);
  
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      //If the quiz is finished then we hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Your Jedi Rank is:</h1>
            <p>Your JEDI Rank - based on your results:</p>
            <p>32 - 33 - Jedi Master</p>
            <p>29 - 31 - Jedi Sentinels</p>
            <p>25 - 28 - Jedi Guardian</p>
            <p>21 - 24 - Jedi Consular</p>
            <p>18 - 20 - Jedi Knights</p>
            <p>15 - 17 - Jedi Service Corps</p>
            <p>12 - 14 - Padawan </p>
            <p>11 - Jedi Younglings</p>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}
  
  
generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
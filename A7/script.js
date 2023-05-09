addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const welcome = document.getElementById("welcome");
    const timerElement = document.getElementById("timer");
    const question = document.getElementById("question");
    const questionButton = document.getElementById("questionButton");
    const questionContent = document.getElementById("questionContent");
    const questionForm = document.getElementById("questionForm");
    const answerInput = document.getElementById("answerInput");
    const nextButton = document.getElementById("nextButton");
    const question2Content = document.getElementById("question2Content");
    const finishButton = document.getElementById("finishButton");
    const lastPhase = document.getElementById("lastPhase");
    const finish = document.getElementById("finish");
    const hint = document.getElementById("hint");
    const hint2 = document.getElementById("hint2");
  
  
    let timerInterval;
    let startTime;
    let elapsedTime = 0;
    let answer;
  
    function startTimer() {
      startButton.disabled = true;
      startTime = new Date().getTime() - elapsedTime;
  
      timerElement.style.display = "block";
      timerElement.style.opacity = "1";
      welcome.style.display = "none";
      question.style.display = "block";
      startButton.style.display = "none";
  
      timerInterval = setInterval(updateTimer, 10);
    }
  
    function finishTimer() {
      clearInterval(timerInterval);
      startButton.disabled = false;
    }
  
    function updateTimer() {
      const currentTime = new Date().getTime();
      elapsedTime = currentTime - startTime;
  
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  
      const formattedTime = `${padZero(minutes)}:${padZero(seconds)}:${padZero(
        milliseconds
      )}`;
      timerElement.textContent = formattedTime;
    }
  
    function padZero(num) {
      return num.toString().padStart(2, "0");
    }
  
    startButton.addEventListener("click", startTimer);
    questionButton.addEventListener("click", function () {
      questionButton.style.display = "none";
      questionContent.style.display = "block";
    });
  
    questionForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const assignments = 7;
      const trees = 9;
      const weeks = 12;
  
      answer = weeks - assignments + trees;
      const userAnswer = parseInt(answerInput.value);
  
      if (userAnswer === answer) {
        questionContent.style.display = "none";
        nextButton.style.display = "block";
        nextPhase.style.display = "block";
      } else {
        console.log("Expected answer:", answer);
        hint.style.display = "block";
        Swal.fire({
          icon: 'error',
          title: 'Jeff Probst says...',
          text: "Wrong Answer!",
        })
        
      }
  
      answerInput.value = "";
    });
  
    nextButton.addEventListener("click", function () {
      question2Content.style.display = "block";
      nextButton.style.display = "none";
      nextPhase.style.display = "none";
    });
  
    document.getElementById("question2Form").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const previousAnswer = answer;
      const currentDayOfMonth = new Date().getDate();
      const classStartTime = 10;
      const stairsClimbed = 25;
      const expectedAnswer = (stairsClimbed - previousAnswer) - currentDayOfMonth + classStartTime;
  
      // Retrieve user's answer from the input field
      const userAnswer = parseInt(event.target.querySelector("#answerInput").value, 10);
      if (userAnswer === expectedAnswer) {
        // Display success message
        question2Content.style.display = "none";
        lastPhase.style.display = "block";
        finishButton.style.display = "block";
      } else {
        console.log("Expected answer:", expectedAnswer);
        hint2.style.display = "block";
        Swal.fire({
            icon: 'error',
            title: 'Jeff Probst says...',
            text: "Wrong Answer!",
        })
        
      }
      answerInput.value = "";
    });
  
    finishButton.addEventListener("click", function () {
        finishButton.style.display = "none";
        finish.style.display = "block";
        lastPhase.style.display = "none";
        finishTimer();
        timerElement.style.color = "red";
      });
      
  });
  
     
  
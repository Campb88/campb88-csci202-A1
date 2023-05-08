document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const welcome = document.getElementById("welcome");
    const timerElement = document.getElementById("timer");
    const question = document.getElementById("question");
    const questionButton = document.getElementById("questionButton");
    const questionContent = document.getElementById("questionContent");
    const questionForm = document.getElementById("questionForm");
    const answerInput = document.getElementById("answerInput");
    const nextButton = document.getElementById("nextButton");
    const question2 = document.getElementById("question2Content");
    const finishButton = document.getElementById("finishButton");

    const nextPhaseMessage = document.createElement("p");
    const finishMessage = document.createElement("p");
  
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
      const wisdomOfTrees = 15;                                         // need to confirm
  
      const daysSinceStart = Math.floor(
        (new Date() - new Date("2023-03-28")) / (1000 * 60 * 60 * 24)
      );
  
      answer = daysSinceStart - assignments - wisdomOfTrees;
      const userAnswer = parseInt(answerInput.value);
  
      if (userAnswer === answer) {
        questionContent.style.display = "none";
        nextButton.style.display = "block";
        nextPhaseMessage.innerHTML =
          "Well done!<br>Go to the next landing to start the next phase of this challenge.";
        nextPhaseMessage.style.textAlign = "center";
        nextPhaseMessage.style.paddingTop = "7em";
        nextPhaseMessage.style.fontSize = "3em";
        question.appendChild(nextPhaseMessage);

      } else {
        alert("That's not the correct answer. Try again.");
      }
  
      answerInput.value = "";
    });
  
    nextButton.addEventListener("click", function () {
      question2.style.display = "block";
      nextButton.style.display = "none";
      nextPhaseMessage.style.display = "none";
    });

    document.getElementById("question2Form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Retrieve user's answer from the input field
        const userAnswer = parseInt(document.getElementById("answerInput").value);
        
        // Calculate the expected answer
        const previousAnswer = answer;
        const currentDayOfMonth = new Date().getDate();
        const classStartTime = 10;
        const stairsClimbed = 65;
        const expectedAnswer = stairsClimbed - (previousAnswer + currentDayOfMonth - classStartTime);
        
        // Check if the user's answer is correct
        if (userAnswer === expectedAnswer) {
          // Display success message
          question2Content.style.display = "none";
          finishMessage.innerHTML =
            "Well done!<br>Race to the bottom of the stairs and press the button below to complete the challenge.";
          finishMessage.style.textAlign = "center";
          finishMessage.style.paddingTop = "7em";
          finishMessage.style.fontSize = "3em";
          question.appendChild(finishMessage);
          finishButton.style.display = "block";
        } else {
          // Display error message
          document.getElementById("questionContent").innerHTML = "<p>Oops! That's not the correct answer. Try again!</p>";
        }
      });

      finishButton.addEventListener("click", function () {
        finishButton.style.display = "none";
        finishMessage.style.display = "none";
        finishTimer();
        timerElement.style.color = "red";
        timerElement.style.paddingTop = "4em";
      });
      
      
  });

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
    const progressBar = document.getElementById("progress");
  
  
  
    let timerInterval;
    let startTime;
    let elapsedTime = 0;
    let answer;
  
    function startTimer() {
      startButton.disabled = true;
      startTime = new Date().getTime() - elapsedTime;
  
      timerElement.style.display = "block";
      timerElement.style.opacity = "1";
      progressBar.style.display = "block";
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
  
    questionButton.addEventListener("click", function () {
      questionButton.style.display = "none";
      questionContent.style.display = "block";
    });

    startButton.addEventListener("click", function () {
      if (!isWithinStartLocation()) {
        Swal.fire({
          icon: 'error',
          title: 'Jeff Probst says...',
          text: "Get to the starting line!",
        })
        return;
      }
      startTimer();
    });
    
    function isWithinStartLocation() {
      // Specify the latitude and longitude of the start location
      const startLatitude = 48.732504917653245;
      const startLongitude = -122.486269190537;
    
      if (navigator.geolocation) {
        const position = navigator.geolocation.getCurrentPosition(function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const distance = calculateDistance(latitude, longitude, startLatitude, startLongitude);
    
          // Set a threshold distance (in meters) for considering the user within the start location
          const threshold = 10;
          return distance <= threshold;
        });
        return position;
      } else {
        console.error("Geolocation is not supported by this browser.");
        return false;
      }
    }
  
    questionForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const assignments = 7;
      const wisdomOfTrees = 15;
      const daysSinceStart = Math.floor(
        (new Date() - new Date("2023-03-28")) / (1000 * 60 * 60 * 24)
      );
  
      answer = daysSinceStart - assignments - wisdomOfTrees;
      const userAnswer = parseInt(answerInput.value);
  
      if (userAnswer === answer) {
        questionContent.style.display = "none";
        nextButton.style.display = "block";
        nextPhase.style.display = "block";
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Jeff Probst says...',
          text: "Wrong Answer!",
        }).then(() => {
          console.log("Expected answer:", expectedAnswer);
        });
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
      const stairsClimbed = 65;
      const expectedAnswer = stairsClimbed - (previousAnswer + currentDayOfMonth - classStartTime);
  
      // Retrieve user's answer from the input field
      const userAnswer = parseInt(event.target.querySelector("#answerInput").value, 10);
      if (userAnswer === expectedAnswer) {
        // Display success message
        question2Content.style.display = "none";
        lastPhase.style.display = "block";
        finishButton.style.display = "block";
      } else {
        Swal.fire({
            icon: 'error',
            title: 'Jeff Probst says...',
            text: "Wrong Answer!",
        }).then(() => {
          console.log("Expected answer:", expectedAnswer);
        });
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


      window.addEventListener("load", function () {
        
        // Specify the latitude and longitude of the starting and desired locations

        // far side of the stairs
        // 48.732504917653245, -122.486269190537

        // near side of stairs 
        // 48.732646599857695, -122.48626568636452
        const startLatitude = 48.732504917653245;
        const startLongitude = -122.486269190537;
        const desiredLatitude = 48.732646599857695;
        const desiredLongitude = -122.48626568636452;
      
        function calculateProgress(latitude, longitude) {
          const startDistance = calculateDistance(latitude, longitude, startLatitude, startLongitude);
          const targetDistance = calculateDistance(latitude, longitude, desiredLatitude, desiredLongitude);
          const progress = (startDistance - targetDistance) / startDistance * 100;
          return Math.max(0, Math.min(100, progress)); // Clamp progress between 0 and 100
        }
      
        function calculateDistance(latitude, longitude) {
          const earthRadius = 6371; // Radius of the Earth in kilometers
          const lat1 = toRadians(desiredLatitude);
          const lon1 = toRadians(desiredLongitude);
          const lat2 = toRadians(latitude);
          const lon2 = toRadians(longitude);
  
          const deltaLat = lat2 - lat1;
          const deltaLon = lon2 - lon1;
  
          const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          const distance = earthRadius * c;
  
          return distance;
      }
      
        function updateProgressBar(latitude, longitude) {
          const progress = calculateProgress(latitude, longitude);
          progressBar.style.width = progress + "%";
        }
      
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            updateProgressBar(latitude, longitude);
          }, function (error) {
            console.error("Error getting current position:", error);
          });
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      });
      
  });
  
     
  
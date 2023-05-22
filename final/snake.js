function goToArcadeInterface() {
    window.location.href = 'index.html'; // Replace with the path to your arcade interface HTML file
  }
  
let gameStarted = false;

// Start the game when the start button is clicked
function startGame() {
    // Hide the start button
    startButton.style.display = "none";

    // Start the game loop
    gameStarted = true;
    // gameLoop();
}

// Get the start button element
const startButton = document.getElementById("startButton");

// Add event listener for click event on the start button
startButton.addEventListener("click", startGame);
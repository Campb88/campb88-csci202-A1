function goToArcadeInterface() {
    window.location.href = 'index.html'; // Replace with the path to your arcade interface HTML file
  }
  
  
// Get the canvas element and its context
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Pac-Man properties
let pacman = {
    x: 300,
    y: 300,
    radius: 20,
    mouthAngle: 0,
    speed: 3,
    direction: "right",
};

// Game loop
function gameLoop() {
    clearCanvas();
    if (gameStarted) {
        updatePacman();
        drawPacman();
    }
    requestAnimationFrame(gameLoop);
}

// Start the game when the start button is clicked
function startGame() {
    // Hide the start button
    startButton.style.display = "none";

    // Start the game loop
    gameStarted = true;
    gameLoop();
}

// Get the start button element
const startButton = document.getElementById("startButton");

// Add event listener for click event on the start button
startButton.addEventListener("click", startGame);

// Clear the canvas
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function updatePacman() {
    switch (pacman.direction) {
        case "right":
            pacman.x += pacman.speed;
            break;
        case "left":
            pacman.x -= pacman.speed;
            break;
        case "up":
            pacman.y -= pacman.speed;
            break;
        case "down":
            pacman.y += pacman.speed;
            break;
    }

    // Check if Pac-Man has gone off the canvas
    if (pacman.x > canvas.width + pacman.radius) {
        pacman.x = -pacman.radius;  // Place Pac-Man on the left edge
    } else if (pacman.x < -pacman.radius) {
        pacman.x = canvas.width + pacman.radius;  // Place Pac-Man on the right edge
    } else if (pacman.y > canvas.height + pacman.radius) {
        pacman.y = -pacman.radius;  // Place Pac-Man on the top edge
    } else if (pacman.y < -pacman.radius) {
        pacman.y = canvas.height + pacman.radius;  // Place Pac-Man on the bottom edge
    }

    // Control Pac-Man's mouth animation
    pacman.mouthAngle += 0.1;
    if (pacman.mouthAngle > 2) {
        pacman.mouthAngle = 0;
    }
}


// Draw Pac-Man on the canvas
function drawPacman() {
    context.beginPath();

    let startAngle, endAngle;

    switch (pacman.direction) {
        case "right":
            startAngle = (0.25 - 0.15 * Math.cos(pacman.mouthAngle)) * Math.PI;
            endAngle = (1.75 + 0.15 * Math.cos(pacman.mouthAngle)) * Math.PI;
            break;
        case "left":
            startAngle = (1.25 - 0.15 * Math.cos(pacman.mouthAngle)) * Math.PI;
            endAngle = (0.75 + 0.15 * Math.cos(pacman.mouthAngle)) * Math.PI;
            break;
        case "up":
            startAngle = (1.75 - 0.15 * Math.cos(pacman.mouthAngle)) * Math.PI;
            endAngle = (1.25 + 0.15 * Math.cos(pacman.mouthAngle)) * Math.PI;
            break;
        case "down":
            startAngle = (0.75 - 0.15 * Math.cos(pacman.mouthAngle)) * Math.PI;
            endAngle = (0.25 + 0.15 * Math.cos(pacman.mouthAngle)) * Math.PI;
            break;
    }

    context.arc(pacman.x, pacman.y, pacman.radius, startAngle, endAngle);
    context.lineTo(pacman.x, pacman.y);
    context.closePath();
    context.fillStyle = "yellow";
    context.fill();
}

// Handle key press events to change Pac-Man's direction
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowLeft":
            pacman.direction = "left";
            break;
        case "ArrowUp":
            pacman.direction = "up";
            break;
        case "ArrowRight":
            pacman.direction = "right";
            break;
        case "ArrowDown":
            pacman.direction = "down";
            break;
    }
});


function restartGame() {
    // Reset Pac-Man's position and any other necessary game-specific logic
    pacman.x = 50;
    pacman.y = 50;
    pacman.direction = "right";
}


// Start the game loop
gameLoop();

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
    score: 0,
    numPellets: 5,
    numGhost: 3,
};

let ghost = {
    x: 0,
    y: 0,
    direction: "right",
    speed: 2,

}


// Pellet properties
let pellets = []; // Array to store pellets
let ghosts = [];  // Array to store ghosts

// Create a function to generate a random number within a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Create a function to add a random pellet to the canvas
function addRandomPellet() {
    const pellet = {
        x: getRandomNumber(0, canvas.width),
        y: getRandomNumber(0, canvas.height),
        radius: 5,
        color: "white",
    };
    pellets.push(pellet);
}

// Generate 20 random pellets initially
for (let i = 0; i < pacman.numPellets; i++) {
    addRandomPellet();
}


// Draw the pellets on the canvas
function drawPellets() {
    pellets.forEach((pellet) => {
        context.beginPath();
        context.arc(pellet.x, pellet.y, pellet.radius, 0, 2 * Math.PI);
        context.closePath();
        context.fillStyle = pellet.color;
        context.fill();
    });
}

// Create a function to add a random ghost to the canvas
function addRandomGhost() {
    const newGhost = {
      x: getRandomNumber(0, canvas.width),
      y: getRandomNumber(0, canvas.height),
      radius: 15,
      color: "red",
    };
    ghosts.push(newGhost);
  }
  
  // Generate 3 random ghosts initially
  for (let i = 0; i < pacman.numGhost; i++) {
    addRandomGhost();
  }


function drawGhost(ghost) {
    const { x, y, radius, color } = ghost;
    const eyeRadius = radius * 0.15;
    const eyeOffsetX = radius * 0.3;
    const eyeOffsetY = radius * 0.2;
    const mouthOffsetY = radius * 0.5;
    const mouthWidth = radius * 0.5;

    context.beginPath();
    context.arc(x, y - radius, radius, Math.PI, 2 * Math.PI); // Draw ghost body
    context.lineTo(x + radius, y);
    context.lineTo(x - radius, y);
    context.closePath();
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.stroke();

    context.beginPath();
    context.arc(x - eyeOffsetX, y - radius + eyeOffsetY, eyeRadius, 0, 2 * Math.PI); // Draw left eye
    context.closePath();
    context.fillStyle = "white";
    context.fill();

    context.beginPath();
    context.arc(x + eyeOffsetX, y - radius + eyeOffsetY, eyeRadius, 0, 2 * Math.PI); // Draw right eye
    context.closePath();
    context.fillStyle = "white";
    context.fill();

    context.beginPath();
    context.arc(x, y - mouthOffsetY, mouthWidth, 0, Math.PI, true); // Draw mouth
    context.closePath();
    context.fillStyle = "white";
    context.fill();
}


// Draw all the ghosts on the canvas
function drawGhosts() {
    ghosts.forEach((ghost) => {
        drawGhost(ghost);
    });
}

// Update the position of Pac-Man and the ghosts
function updateGame() {
    updatePacman();
    updateGhosts();
}

function isCollision(pacman, pellet) {
    const dx = pacman.x - pellet.x;
    const dy = pacman.y - pellet.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Adjust the buffer value for pellets to decrease sensitivity
    const pelletBuffer = 2;

    if (distance < pacman.radius - pellet.radius - pelletBuffer) {
        return true; // Collision occurred
    } else {
        return false; // No collision
    }
}

function isGhostCollision(pacman, ghost) {
    const dx = pacman.x - ghost.x;
    const dy = pacman.y - ghost.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < pacman.radius + ghost.radius) {
        return true; // Collision occurred
    } else {
        return false; // No collision
    }
}


function updateGhosts() {
    ghosts.forEach((ghost) => {
        // Move the ghost in its current direction
        switch (ghost.direction) {
            case "right":
                ghost.x += ghost.speed;
                break;
            case "left":
                ghost.x -= ghost.speed;
                break;
            case "up":
                ghost.y -= ghost.speed;
                break;
            case "down":
                ghost.y += ghost.speed;
                break;
        }

        // Check if the ghost has gone off the canvas
        if (ghost.x > canvas.width + ghost.radius) {
            // Place the ghost on the left edge with a new direction
            ghost.x = -ghost.radius;
            ghost.direction = getRandomDirection(["right", "up", "down"]);
        } else if (ghost.x < -ghost.radius) {
            // Place the ghost on the right edge with a new direction
            ghost.x = canvas.width + ghost.radius;
            ghost.direction = getRandomDirection(["left", "up", "down"]);
        } else if (ghost.y > canvas.height + ghost.radius) {
            // Place the ghost on the top edge with a new direction
            ghost.y = -ghost.radius;
            ghost.direction = getRandomDirection(["right", "left", "up"]);
        } else if (ghost.y < -ghost.radius) {
            // Place the ghost on the bottom edge with a new direction
            ghost.y = canvas.height + ghost.radius;
            ghost.direction = getRandomDirection(["right", "left", "down"]);
        }

        // Check if the ghost has collided with Pac-Man
        if (isGhostCollision(pacman, ghost)) {
            gameOver();
        }
    });
}



// Function to get a random direction from an array of directions
function getRandomDirection(directions) {
    return directions[Math.floor(Math.random() * directions.length)];
}

// Game over function
function gameOver() {
    gameStarted = false;
    const levelElement = document.getElementById("levelElement");
    levelElement.textContent = "Game Over";


    startButton.textContent = "Replay";


    startButton.style.display = "block"; // Show the start button
    startButton.style.top = "60%"

    // Add event listener for click event on the start button
    startButton.addEventListener("click", function () {
        // Redirect to pacman.html
        window.location.href = "pacman.html";
    });
}

function gameLoop() {
    clearCanvas();
    if (gameStarted) {
        updateGame();
        drawPacman();
        drawPellets();
        drawGhosts();
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

function updateNumPellets() {
    pacman.numPellets = pacman.numPellets + currentLevel * 3;
}

function updateNumGhosts() {
    pacman.numGhost = pacman.numGhost + 3;
}

// Update the score board
function updateScoreBoard() {
    scoreElement.textContent = "Score: " + pacman.score;
    if (pellets.length == 0) {
        restartGame();
    }
}

// Create a score board element
const scoreBoard = document.createElement("div");
scoreBoard.id = "scoreBoard";
document.body.appendChild(scoreBoard);

// Create a score element
const scoreElement = document.createElement("div");
scoreElement.id = "scoreElement";
scoreBoard.appendChild(scoreElement);

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
        pacman.x = -pacman.radius; // Place Pac-Man on the left edge
    } else if (pacman.x < -pacman.radius) {
        pacman.x = canvas.width + pacman.radius; // Place Pac-Man on the right edge
    } else if (pacman.y > canvas.height + pacman.radius) {
        pacman.y = -pacman.radius; // Place Pac-Man on the top edge
    } else if (pacman.y < -pacman.radius) {
        pacman.y = canvas.height + pacman.radius; // Place Pac-Man on the bottom edge
    }

    // Check collision between Pac-Man and each pellet
    for (let i = 0; i < pellets.length; i++) {
        const pellet = pellets[i];
        if (isCollision(pacman, pellet)) {
            pellets.splice(i, 1); // Remove the pellet from the array
            pacman.score++; // Increase the score

            // Update the score on the scoreboard
            updateScoreBoard();
            break; // Exit the loop after collision is found
        }
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



// Get the restart button element
const backButton = document.getElementById("backButton");

// Add event listener for click event on the restart button
backButton.addEventListener("click", function () {
    window.location.href = 'index.html'; // Replace with the path to your index.html file
});

let currentLevel = 1; // Variable to keep track of the current level

function restartGame() {
    // Reset Pac-Man's position and direction
    pacman.x = 300;
    pacman.y = 300;
    pacman.direction = "right";

    // Clear the pellets array
    pellets = [];

    // Increase the current level
    currentLevel++;

    updateNumPellets();
    updateNumGhosts(); // Update the number of ghosts

    // Generate pellets for the next level 
    for (let i = 0; i < pacman.numPellets; i++) {
        addRandomPellet();
    }

    // Generate ghosts for the next level 
    for (let i = 0; i < pacman.numGhost; i++) {
        addRandomGhost();
    }

    // Update the score on the scoreboard
    updateScoreBoard();

    // Display the level text temporarily
    const levelElement = document.getElementById("levelElement");
    levelElement.textContent = "Level " + currentLevel;
    setTimeout(() => {
        levelElement.textContent = "";
    }, 2000);
}



// Start the game loop
gameLoop();


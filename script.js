let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let startSound = document.getElementById('start-sound');
let stopSound = document.getElementById('stop-sound');

// Ensure the sounds are loaded before playing them
startSound.addEventListener('canplaythrough', function() {
    startSound.volume = 0.5; // Set volume (0.0 to 1.0)
}, false);

stopSound.addEventListener('canplaythrough', function() {
    stopSound.volume = 0.5; // Set volume (0.0 to 1.0)
}, false);

let seconds = 0;
let intervalId = null;

// Function to update the timer display
function updateDisplay() {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    // Format the time as MM:SS
    timerDisplay.textContent = 
        (minutes < 10 ? '0' : '') + minutes + ':' + 
        (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
}

// Start the timer
startButton.addEventListener('click', function() {
    if (intervalId === null) {
        startSound.play(); // Play sound when timer starts
        intervalId = setInterval(function() {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

// Stop the timer
stopButton.addEventListener('click', function() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
        stopSound.play(); // Play sound when timer stops
    }
});

// Reset the timer
resetButton.addEventListener('click', function() {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    updateDisplay();
});

// Initial Display
updateDisplay();

// Get the elements we need
const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const lapsList = document.getElementById('laps-list');

// Set some initial variables
let startTime = 0;
let endTime = 0;
let laps = [];

// Add event listeners to our buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
// Function to start the timer
function startTimer() {
  startTime = new Date().getTime();
  display.innerHTML = '00:00:00';
  setInterval(updateTimer, 1000);
}

// Function to stop the timer
function stopTimer() {
  endTime = new Date().getTime();
  const lapTime = endTime - startTime;
  laps.push(lapTime);
  updateLaps();
}

// Function to reset the timer
function resetTimer() {
  startTime = 0;
  endTime = 0;
  laps = [];
  display.innerHTML = '00:00:00';
  lapsList.innerHTML = '';
}

// Function to update the timer display
function updateTimer() {
  const currentTime = new Date().getTime();
  const timeElapsed = currentTime - startTime;
  const minutes = Math.floor(timeElapsed / 60000);
  const seconds = Math.floor((timeElapsed % 60000) / 1000);
  const milliseconds = timeElapsed % 1000;
  display.innerHTML = `
		${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds
			.toString()
			.padStart(3, '0')
			.slice(0, 2)
		}`;
}

// Function to update the laps list
function updateLaps() {
  lapsList.innerHTML = '';
  laps.forEach((lap, index) => {
    const lapElement = document.createElement('li');
    lapElement.textContent = `Lap ${index + 1}: ${lap}ms`;
    lapsList.appendChild(lapElement);
  });
}


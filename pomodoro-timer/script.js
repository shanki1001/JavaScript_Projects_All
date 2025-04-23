const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const statusText = document.getElementById("status");

let workDuration = 25 * 60;
let timeLeft = workDuration;
let timer = null;
let isRunning = false;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  statusText.textContent = "Focus! ";
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      statusText.textContent = "Time for a break! ";
      isRunning = false;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
  statusText.textContent = "Paused ";
}
function resetTimer() {
  clearInterval(timer);
  timeLeft = workDuration;
  isRunning = false;
  updateDisplay();
  statusText.textContent = "Ready to work?";
}

//Event Listener
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Initial Display
updateDisplay();

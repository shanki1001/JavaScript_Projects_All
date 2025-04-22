const quotes = [
  "JavaScript is amazing!",
  "Practice makes perfect.",
  "Typing fast is a skill.",
  "Front-end development rocks.",
  "Debugging is like being a detective.",
];

const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");

let startTime, interval, currentQuote;

function setNewQuote() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = currentQuote;
  inputEl.value = "";
  timeEl.textContent = "0";
  wpmEl.textContent = "0";
  accuracyEl.textContent = "100";
}

function startTimer() {
  startTime = new Date();
  interval = setInterval(() => {
    const elapsed = Math.floor((new Date() - startTime) / 1000);
    timeEl.textContent = elapsed;
    updateStats();
  }, 1000);
}

function updateStats() {
  const typedText = inputEl.value;
  const elapsed = Math.floor((new Date() - startTime) / 1000) || 1;

  // WPM: (words / minutes)
  const words = typedText.trim().split(/\s+/).length;
  const wpm = Math.floor((words / elapsed) * 60);
  wpmEl.textContent = isNaN(wpm) ? 0 : wpm;

  // Accuracy
  let correct = 0;
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === currentQuote[i]) {
      correct++;
    }
  }
  const accuracy = Math.floor((correct / currentQuote.length) * 100);
  accuracyEl.textContent = accuracy;
}

inputEl.addEventListener("input", () => {
  if (!startTime) startTimer();
  updateStats();

  // Auto stop if finished
  if (inputEl.value === currentQuote) {
    clearInterval(interval);
  }
});

restartBtn.addEventListener("click", () => {
  clearInterval(interval);
  setNewQuote();
  startTime = null;
});

setNewQuote();

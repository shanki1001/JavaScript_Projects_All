let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let operator = document.getElementById("operator");
let ansInput = document.getElementById("ans-input");
let ansBtn = document.getElementById("ans-btn");
let currentScore = document.getElementById("current-score");
let levelMeter = document.getElementById("level-meter");
let highScoreEle = document.getElementById("high-score");

let level = 1;
let operators = ["+", "-", "*", "/"];
let answer = 0;
let score = 0;
let highScore = 0;

function generateQuestion() {
  let firstNumber =
    Math.floor(Math.random() * (10 * level - 10 * (level - 1) + 1)) +
    10 * (level - 1);
  let secondNumber =
    Math.floor(Math.random() * (10 * level - 10 * (level - 1) + 1)) +
    10 * (level - 1);
  let operatorNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

  // Checking some cases related to - and /.
  if (operatorNumber === 1 && firstNumber < secondNumber) {
    let temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  } else if (operatorNumber === 3) {
    if (secondNumber === 0) secondNumber = 1;
    else {
      if (firstNumber % secondNumber != 0) {
        firstNumber -= firstNumber % secondNumber;
      }
    }
  }
  number1.innerHTML = firstNumber;
  number2.innerHTML = secondNumber;
  operator.innerHTML = operators[operatorNumber];
  switch (operatorNumber) {
    case 0:
      answer = firstNumber + secondNumber;
      break;
    case 1:
      answer = firstNumber - secondNumber;
      break;
    case 2:
      answer = firstNumber * secondNumber;
      break;
    case 3:
      answer = Math.floor(firstNumber / secondNumber);
      break;
  }
}

function increaseScore() {
  score++;
  if (score >= 5 * level) level++;
}
function updateHighScore(score) {
  highScore = score;
  highScoreEle.textContent =
    `High Score:` + highScore.toString().padStart(2, "0");
}

function endGame() {
  score = 0;
  level = 1;
  currentScore.textContent = score;
  ansInput.value = "";
  displayHomeScreen();
}

function addDetails() {
  currentScore.textContent = score.toString().padStart(2, "0");
  levelMeter.innerHTML = `Level: ${level}`;
}

function checkAnswer() {
  if (ansInput.value == answer) {
    increaseScore();
    addDetails();
    generateQuestion();
    ansInput.value = "";
  } else {
    if (score > highScore) {
      updateHighScore(score);
    }
    endGame();
  }
}

function startGame() {
  addDetails();
  generateQuestion();
  ansInput.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
      checkAnswer();
    }
  });
  ansBtn.addEventListener("click", () => {
    checkAnswer();
  });
}

startGame();

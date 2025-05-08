let inputNumber = document.getElementById("input-number");
let submitbtn = document.getElementById("submit-btn");
let result = document.getElementById("result");
let cardNumber = document.getElementById("card-number");
let card = document.getElementById("card");
let resetBtn = document.getElementById("reset-btn");
console.log("inputed value:", inputNumber.value);
let number;
let cardText = "Card";
let cardflipped = false;
//flipping card
function flipCard() {
  cardflipped = true;
  number = Math.floor(Math.random() * 100) + 1;
  cardNumber.innerHTML = "";
  cardNumber.innerHTML = number;
}
function resetCard() {
  cardflipped = false;
  result.innerHTML = "";
  cardNumber.innerHTML = cardText;
  resetBtn.style.display = "none";
}
function showResetButton() {
  resetBtn.style.display = "inline";
}
submitbtn.addEventListener("click", () => {
  if (cardflipped) {
    window.alert("Reset the game before submittig again!");
    return;
  }

  if (inputNumber.value === "") {
    result.innerHTML = "<h2>Enter a number!</h2>";
    return;
  }
  if (inputNumber.value > 100 || inputNumber.value < 1) {
    result.innerHTML = "<h2>Enter a number in the given range!</h2>";
    return;
  }
  flipCard();
  if (inputNumber.value == number) {
    result.innerHTML = "<h2>You have guessed right!</h2>";
  } else {
    result.innerHTML = "<h2> You guessed wrong!</h2>";
  }
  showResetButton();
  inputNumber.value = "";
});
resetBtn.addEventListener("click", () => {
  resetCard();
});
console.clear();

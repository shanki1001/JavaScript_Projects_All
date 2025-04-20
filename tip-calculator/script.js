const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const calculateBtn = document.getElementById("calculate");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");

calculateBtn.addEventListener("click", () => {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipInput.value);
  if (isNaN(bill) || isNaN(tipPercent)) {
    alert("Please enter valid number");
    return;
  }
  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;
  tipAmount.textContent = tip.toFixed(2);
  totalAmount.textContent = total.toFixed(2);
});

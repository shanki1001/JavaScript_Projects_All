const passwordEl = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("includeLower");
const includeLower = document.getElementById("includeUpper");
const includeUpper = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generateBtn");

//Character sets
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABDCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()";

//Update length display
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Generate Password
function generatePassword() {
  let length = parseInt(lengthSlider.value);
  let Charset = "";

  if (includeLower.checked) Charset += lower;
  if (includeUpper.checked) Charset += upper;
  if (includeNumbers.checked) Charset += numbers;
  if (includeSymbols.checked) Charset += symbols;

  if (Charset === "") {
    alert("Please select at least one character type!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandomChar(Charset);
  }
  passwordEl.value = password;
}

//Copy to clipboard
copyBtn.addEventListener("click", () => {
  if (passwordEl.value === "") return;
  navigator.clipboard.writeText(passwordEl.value).then(() => {
    alert("Password copied to clipboard!");
  });
});

generateBtn.addEventListener("click", generatePassword);

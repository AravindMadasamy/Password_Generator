function generatePassword() {
  const lettersCount = parseInt(document.getElementById('letters').value);
  const numbersCount = parseInt(document.getElementById('numbers').value);
  const symbolsCount = parseInt(document.getElementById('symbols').value);

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-={}[]|:;<>,.?/";

  let passwordArray = [];

  for (let i = 0; i < lettersCount; i++) {
    passwordArray.push(letters.charAt(Math.floor(Math.random() * letters.length)));
  }

  for (let i = 0; i < numbersCount; i++) {
    passwordArray.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
  }

  for (let i = 0; i < symbolsCount; i++) {
    passwordArray.push(symbols.charAt(Math.floor(Math.random() * symbols.length)));
  }

  // Shuffle the array
  passwordArray = passwordArray.sort(() => Math.random() - 0.5);

  document.getElementById('password').value = passwordArray.join('');
}

document.getElementById("copyBtn").addEventListener("click", () => {
  const password = document.getElementById("password");
  password.select();
  password.setSelectionRange(0, 99999); // For mobile
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});

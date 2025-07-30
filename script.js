function generatePassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;<>,.?/";
  const length = 12;
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("password").value = password;
}

document.getElementById("copyBtn").addEventListener("click", () => {
  const password = document.getElementById("password");
  password.select();
  password.setSelectionRange(0, 99999); // For mobile
  document.execCommand("copy");
  alert("Password copied to clipboard!");
});

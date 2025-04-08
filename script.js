const form = document.querySelector("form");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    showMessage("Wypełnij wszystkie pola!");
    return;
  }

  if (!validateEmail(email)) {
    showMessage("Nieprawidłowy adres e-mail");
    return;
  }

  if (password.length < 6) {
    showMessage("Hasło musi mieć co najmniej 6 znaków");
    return;
  }

  showMessage(`Witaj, ${name}! Rejestracja udana ✅`);
  form.reset();
});

function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

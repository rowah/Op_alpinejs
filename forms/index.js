const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginFormData = new FormData(loginForm);
  console.log(loginFormData);

  const name = loginFormData.get("astronautName"); //astronautName from the name attribute
  console.log(name);
  const email = loginFormData.get("astronautEmail");
  console.log(email);
  const password = loginFormData.get("astronautPassword");
  console.log(password);
});

function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
}

function showSignup() {
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPass").value;

  if (email === "" || pass === "") {
    alert("Please fill in all fields.");
    return;
  }

  window.location.href = "pages/home.html"; // go to dashboard
}

function signup() {
  let name = document.getElementById("signName").value;
  let email = document.getElementById("signEmail").value;
  let pass = document.getElementById("signPass").value;

  if (name === "" || email === "" || pass === "") {
    alert("Please complete the form.");
    return;
  }

  window.location.href = "welcome.html"; // account created page
}

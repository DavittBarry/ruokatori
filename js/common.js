// Menu button's opening and closing function.

var menuBtn = document.getElementById('menuBtn');

menuBtn.onclick = function () {
  document.body.classList.toggle('menu-open');
};

// Log in system's basic setup. First declare JavaScrip div

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user@ruokatori.fi" && password === "ruokatori") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
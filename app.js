const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// user information
const mail = document.getElementById("signin_mail");
const password = document.getElementById("signin_password");

// file upload button
const uploadBtn = document.getElementById("upload");
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

uploadBtn.addEventListener("change",(e) => {
  // debug the code

})
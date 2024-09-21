const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const signin_email = document.getElementById("signin_email").value;
const signin_password = document.getElementById("signin_password").value;

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    console.log(signin_email)   // to determine the value of signin_email we are using console.log here 
  container.classList.remove("right-panel-active");
});

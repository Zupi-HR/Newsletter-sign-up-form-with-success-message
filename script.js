const signUpCard = document.querySelector(".signup-card");
const successCard = document.querySelector(".success-card");
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const submittedEmailElement = document.querySelector(".submitted-email");
const dismissButton = document.querySelector(".success-card button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submittedEmailElement.textContent = emailInput.value;
  signUpCard.classList.toggle("hidden");
  successCard.classList.toggle("hidden");
});

dismissButton.addEventListener("click", () => {
  signUpCard.classList.toggle("hidden");
  successCard.classList.toggle("hidden");
  form.reset();
});

const textInput = document.querySelector('#validation-input');
const textLength = document.querySelector('[data-length="6"]');


textInput.addEventListener("blur", (e) => {
 if (e.currentTarget.value.length == textLength.dataset.length) {
   textInput.classList.remove("invalid");
   textInput.classList.add("valid");
 } else {
  textInput.classList.remove("valid");
  textInput.classList.add("invalid");
 }
});
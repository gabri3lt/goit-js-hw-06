const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (print) => {
  output.textContent = print.currentTarget.value;
  if (print.target.value === "") {
    output.textContent = "Anonymous";
  }
});

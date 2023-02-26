const form = document.querySelector(".login-form");

function checkSubmit(event) {
  let inputUser = {};
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  } else {
    inputUser = { email: email.value, password: password.value };
    console.log(userData);
    alert("Email and Password saved!");
    return form.reset();
  }
}
form.addEventListener("submit", checkSubmit);

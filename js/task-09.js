const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const text = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getRandomBackground() {
  const randomColor = getRandomHexColor();

  body.setAttribute("style", `background-color:${randomColor}`);

  text.innerHTML = randomColor;
}

button.addEventListener("click", getRandomBackground);

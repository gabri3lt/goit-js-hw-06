const fontSize = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

fontSize.addEventListener("input", (event) => {
  const sizeValue = event.target.valueAsNumber;
  text.setAttribute("style", `font-size:${sizeValue}px;`);
});

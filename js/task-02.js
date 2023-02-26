const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const listarr = [];

ingredients.forEach((ingredients) => {
  const elem = document.createElement("li");
  elem.textContent = ingredients;
  listarr.push(elem);
});
list.append(...listarr);
console.log(listarr);

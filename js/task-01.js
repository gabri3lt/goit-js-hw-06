const numberCategory = document.querySelectorAll("li.item");
const count = numberCategory.length;
console.log(`Number of categories: ${count}`);

numberCategory.forEach(function (elm) {
  console.log(`Category ${elm.childNodes[1].textContent}`);
  console.log(`Elements: ${elm.getElementsByTagName("li").length}`);
});

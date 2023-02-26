let counterValue = 0;

const dial = document.querySelector("#value");
const btMinus = document.querySelector('button[data-action="decrement"]');
const btPlus = document.querySelector('button[data-action="increment"]');

btMinus.addEventListener("click", () => {
  counterValue--;
  dial.textContent = counterValue;
});
btPlus.addEventListener("click", () => {
  counterValue++;
  dial.textContent = counterValue;
});

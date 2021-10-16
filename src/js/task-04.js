const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;
const decrement = () => {
  return (value.textContent = `${--counterValue}`);
};
const increment = () => {
  return (value.textContent = `${++counterValue}`);
};

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

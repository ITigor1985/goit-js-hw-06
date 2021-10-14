const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const headerEl = document.createElement("h1");
// headerEl.textContent = "This is a heading";
// console.log(headerEl);

// const pEl = document.querySelector("p");
// pEl.after(headerEl);

// const nameIngredients = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// const list = document.querySelector("#ingredients");
// list.insertAdjacentHTML("beforeend", nameIngredients);

const nameIngredients = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  return liEl;
});
console.log(...nameIngredients);
const list = document.querySelector("#ingredients");
list.append(...nameIngredients);

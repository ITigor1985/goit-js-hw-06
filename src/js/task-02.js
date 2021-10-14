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
const nameIngredients = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
});
console.log(nameIngredients);

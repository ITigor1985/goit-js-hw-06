const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");

const createLiArrayElements = (array => {
  return ingredients.map(ingredient => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent=ingredient;
    return liEl;
  })
})
createLiArrayElements(ingredients);
ulEl.append(...createLiArrayElements(ingredients));
const categories = document.querySelector("ul#categories");
console.log("Number of categories: ", categories.children.length);
const allCategoriesEl = document.querySelectorAll(".item");
const titleEL = allCategoriesEl.forEach((title) => {
  console.log("Category: ", title.firstElementChild.textContent);
  console.log(
    "Elements: ",
    title.firstElementChild.nextElementSibling.children.length
  );
});

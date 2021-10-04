const categories = document.querySelector("ul#categories");
console.log("Number of categories: ",categories.children.length);
const titleEL = document.querySelectorAll(".item");
titleEL.forEach(el => {
    console.log("Category: ",el.firstElementChild.textContent)
    console.log("Elements: ",el.firstElementChild.nextElementSibling.children.length)
})


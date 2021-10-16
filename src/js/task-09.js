function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

const changeColor = () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanColorEl.textContent = color;
};

btn.addEventListener("click", changeColor);

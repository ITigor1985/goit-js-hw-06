function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputeNumber = document.querySelector("[type=number]");
const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
let quantityBox = 0;

const createBoxes = (event) => {
  let box = [];
  let count = 0;

  console.log(quantityBox);
  for (let i = 0; i < quantityBox; i++, count += 10) {
    let startWidth = 30;
    let startHeight = 30;
    let bgColor = getRandomHexColor();
    console.log(bgColor);
    const divElement = document.createElement("div");
    divElement.style.width = `${startWidth + count}px`;
    divElement.style.height = `${startHeight + count}px`;
    divElement.style.backgroundColor = bgColor;
    box.push(divElement);
  }
  boxes.append(...box);
  inputeNumber.value = "";
};
const destroyBoxes = () => {
  boxes.innerHTML = "";
  inputeNumber.value = "";
};

const getValue = (event) => {
  quantityBox = parseInt(event.currentTarget.value);
};

inputeNumber.addEventListener("input", getValue);
btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

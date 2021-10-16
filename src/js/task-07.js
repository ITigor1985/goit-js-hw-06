const inputeRange = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

const rangeValue = (event) => {
  console.log(event.currentTarget.value);
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
};

inputeRange.addEventListener("input", rangeValue);

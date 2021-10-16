const textInput = document.querySelector("#validation-input");
console.log(textInput.dataset.length);

const checkingСlass = () => {
  if (textInput.classList.contains(textInput.classList.value)) {
    textInput.classList.remove(textInput.classList.value);
  }
};

const validate = (event) => {
  console.log(event.currentTarget.value.length);
  if (textInput.dataset.length <= event.currentTarget.value.length) {
    textInput.classList.add("valid");
  } else {
    textInput.classList.add("invalid");
  }
};

textInput.addEventListener("blur", validate);
textInput.addEventListener("focus", checkingСlass);
checkingСlass;

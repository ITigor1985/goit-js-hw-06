const form = document.querySelector(".login-form");
const registrationData = {};

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("все поля должны быть заполнены");
  }
  registrationData.email = email.value;
  registrationData.password = password.value;

  console.log(registrationData);
  event.currentTarget.reset();
}

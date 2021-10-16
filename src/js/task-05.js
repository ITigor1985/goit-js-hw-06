const inputeNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

//--------------first way---------------------------------------
// const pressEnter = (event) => {
//   if (event.code === "Enter" || event.currentTarget.value !== "") {
//     outputNameEl.textContent = `${event.currentTarget.value}`;
//   } else if (event.currentTarget.value === "") {
//     outputNameEl.textContent = `Anonymous`;
//   }
// };

// inputeNameEl.addEventListener("keyup", pressEnter);
//----------------------------------------------------------
//--------------secod way-----------------------------------
inputeNameEl.addEventListener("input", (event) => {
  outputNameEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputNameEl.textContent = "Anonymous";
  }
});

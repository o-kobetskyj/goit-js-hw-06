

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// 1-й спосіб

const handleClick = (event) => {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
};
input.addEventListener("click", handleClick);

// 2-й спосіб

// const handleClick = (event) => {
//   if (input.value === "") {
//     output.innerHTML = "Anonymous";
//   } else {
//     output.innerHTML = input.value;
//   }
// };
// input.addEventListener("click", handleClick);

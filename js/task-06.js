// 1-й спосіб
// document.getElementById("validation-input").onblur = function () {
//   if (this.getAttribute("data-length") > this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// };

// 2-й спосіб

const inputRef = document.querySelector("input");
inputRef.addEventListener("blur", onBlurClick);
function onBlurClick(event) {
  if (event.currentTarget.value.length >= inputRef.dataset.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

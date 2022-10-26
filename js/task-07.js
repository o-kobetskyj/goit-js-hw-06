const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", changeSize);

function changeSize(event) {
  textRef.style.fontSize = `${event.target.value}px`;
}

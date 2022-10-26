const bodyRef = document.querySelector("body");
const magicBtnRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

magicBtnRef.addEventListener("click", handleMagicBtnClick);

function handleMagicBtnClick() {
  const color = getRandomHexColor();

  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

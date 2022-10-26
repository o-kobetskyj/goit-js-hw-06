function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  wrapper: document.querySelector("#boxes"),
  number: document.querySelector('[type="number"]'),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", () => {
  refs.wrapper.innerHTML = "";
});

function createBoxes(amount) {
  amount = refs.number.value;
  const boxesCollection = [];

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = 30 + 10 * i + "px";
    newBox.style.height = 30 + 10 * i + "px";

    boxesCollection.push(newBox);
  }
  console.log(boxesCollection);

  refs.wrapper.append(...boxesCollection);
}

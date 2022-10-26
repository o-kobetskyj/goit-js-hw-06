const counter = {
  counterValue: 0,
  increment() {
    console.log("increment -> this", this);
    this.counterValue += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.counterValue -= 1;
  },
};

const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.counterValue;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.counterValue;
});

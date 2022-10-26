const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1-й спосіб

// const liRefs = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const liRef = document.createElement("li");
//   liRef.classList.add("item");
//   liRef.textContent = ingredients[i];
//   liRefs.push(liRef);
// }
// const ingredientsRef = document.querySelector("#ingredients");
// ingredientsRef.append(...liRefs);

// 2-й спосіб

const liRefs = ingredients.map((ingredients) => {
  const liRef = document.createElement("li");
  liRef.classList.add("item");
  liRef.textContent = ingredients;
  return liRef;
});
const ingredientsRef = document.querySelector("#ingredients");
ingredientsRef.append(...liRefs);

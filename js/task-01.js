// Number of categories: 3
const liRefs = document.querySelectorAll(".item");
console.log(`Number of categories: ${liRefs.length}`);
// Category: Animals
// Elements: 4
const titleRefs = document.querySelectorAll("h2");
console.log(titleRefs[0].textContent);
const animalSibl = titleRefs[0].nextElementSibling;
const animalSibls = animalSibl.querySelectorAll("li");
console.log(`Elements: ${animalSibls.length}`);
// Category: Products
// Elements: 3
console.log(titleRefs[1].textContent);
const productlSibl = titleRefs[1].nextElementSibling;
const productlSibls = productlSibl.querySelectorAll("li");
console.log(`Elements: ${productlSibls.length}`);
// Category: Technologies
// Elements: 5
console.log(titleRefs[2].textContent);
const technologieslSibl = titleRefs[2].nextElementSibling;
const technologieslSibls = technologieslSibl.querySelectorAll("li");
console.log(`Elements: ${technologieslSibls.length}`);

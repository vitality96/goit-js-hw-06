const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesAndElements = document.querySelectorAll("#categories > li");

categoriesAndElements.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}, Elements: ${el.lastElementChild.children.length}`)
});

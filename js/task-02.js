const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector("#ingredients");

const foodIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const items = document.createElement('li');
    items.classList.add('item');
    items.textContent = ingredient;
    return items;
  });
}

const elements = foodIngredients(ingredients);
ulList.append(...elements);

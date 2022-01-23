const bodyColor = document.querySelector("body");
const textColor = document.querySelector(".color");
const changeColor = document.querySelector(".change-color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onChangeColor = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  textColor.textContent = bodyColor.style.backgroundColor;
}


changeColor.addEventListener("click", onChangeColor);

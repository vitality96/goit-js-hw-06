const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");
const textElement = document.querySelector("h1");

const inputChange = event => {
    if (inputElement.value === "") {
        outputElement.textContent = "Anonymous";
    } else {
        outputElement.textContent = event.target.value;
    }
}

inputElement.addEventListener("input", inputChange);
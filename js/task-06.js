const inputElement = document.querySelector("input");
const lengthElement = inputElement.getAttribute("data-length");

const inputBlur = event => {
    event.target.classList.add("invalid");

    if (parseInt(lengthElement) === event.target.value.length) {
        event.target.classList.replace("invalid", "valid");
    }
};


inputElement.addEventListener('blur', inputBlur);
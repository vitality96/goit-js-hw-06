const btn = {
    dcrm: document.querySelector("[data-action='decrement']"),
    incrm: document.querySelector("[data-action='increment']"),
    span: document.querySelector("#value"),
}

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;

    btn.span.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;

    btn.span.textContent = counterValue;
};

btn.dcrm.addEventListener('click', decrement);
btn.incrm.addEventListener('click', increment);
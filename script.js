let output = document.querySelector("#result p");

let buttons = document.querySelector("#buttons");
let numberButtons = [...document.querySelectorAll(".number")];
let operatorButtons = [...document.querySelectorAll(".operator")];

let x, y;
let lastOperation = "";
let operation = "";

buttons.addEventListener("click", (e) => {
    if (e.target.nodeName.toLowerCase() === "button") {
        e.target.classList.contains("number") && addText(e.target);
        e.target.classList.contains("operator") && operate(e.target);
    }
});

function addText(e) {
    if (e.textContent === '.' && output.textContent.includes('.')) return;
    output.textContent += e.textContent;
}

function operate(e) {
    if (output.textContent === '') return;

    if (e.textContent === 'C') {
        output.textContent = "";
    }

    if (e.textContent === '=') {
        if (lastOperation !== '') {
            y = Number(output.textContent);
            evaluate(lastOperation);
        }
    }

    [...buttons.children].forEach( (button) => button.classList.remove("selected") );
    if (!"%^√÷×-+".includes(e.textContent)) return;

    if (e.textContent === '+') {
        if (x === undefined) {
            x = Number(output.textContent);
            lastOperation = e.textContent;
            output.textContent = "";
        }
        else if (y === undefined) {
            y = Number(output.textContent);
            evaluate(e.textContent);
        }
    }

    e.classList.add("selected");
}

function evaluate(type) {
    if (type === "+") {
        output.textContent = x + y;
    }

    x = undefined;
    y = undefined;

    lastOperation = '';
}
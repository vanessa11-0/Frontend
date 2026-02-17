let leftSide = "";
let rightSide = "";
let operator = "";
let operatorSelected = false;

function refreshDisplay() {
    const displayElement = document.getElementById("display");
    const content = leftSide + operator + rightSide;
    displayElement.textContent = content === "" ? "0" : content;
}

function addNumber(numero) {
    if (numero === '.') {
        if (operatorSelected) {
            if (rightSide.includes('.')) return;
            if (rightSide === "") rightSide = "0"; 
            rightSide += numero;
        } else {
            if (leftSide.includes('.')) return;
            if (leftSide === "") leftSide = "0"; 
            leftSide += numero;
        }
    } else {

        if (operatorSelected) {
            rightSide = (rightSide === "0" && numero !== '.') ? String(numero) : rightSide + numero;
        } else {
            leftSide = (leftSide === "0" && numero !== '.') ? String(numero) : leftSide + numero;
        }
    }
    refreshDisplay();
}

function clearDisplay() {
    leftSide = "";
    rightSide = "";
    operator = "";
    operatorSelected = false;
    refreshDisplay();
}

function addOperator(operador) {
    if (leftSide === "") return;

    if (operatorSelected && rightSide !== "") {
        calculateResult(); 
        operator = operador; 
        operatorSelected = true;
    } else if (leftSide !== "" && rightSide === "") {

        operator = operador;
        operatorSelected = true;
    }

    refreshDisplay();
}

function showResult(result) {
    const displayElement = document.getElementById("display");
    displayElement.textContent = result;

    if (result === "ERROR") {
        leftSide = "";
    } else {
        leftSide = result.toString();
    }
    rightSide = "";
    operator = "";
    operatorSelected = false;
}

function calculateResult() {
    if (leftSide === "" || rightSide === "") return;

    const left = parseFloat(leftSide);
    const right = parseFloat(rightSide);
    let result = 0;

    switch (operator) {
        case "+":
            result = left + right;
            break;

        case "-":
            result = left - right;
            break;

        case "*":
            result = left * right;
            break;

        case "/":
            if (right === 0) {
                showResult("ERROR");
                return;
            }
            result = left / right;
            break;
    }

    const finalResult = parseFloat(result.toPrecision(10)).toString(); 
    showResult(finalResult);
}

refreshDisplay();
let currentInput = '';
let operator = '';
let firstOperand = null;

function clickNumber(number) {
    currentInput += number;
    updateScreen();
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = currentInput;
    } else {
        calculateResult();
    }
    operator = op;
    currentInput = '';
}

function calculateResult() {
    if (firstOperand === null || currentInput === '') return;
    firstOperand=parseFloat(firstOperand);
    currentInput=parseFloat(currentInput);
    let secondOperand = currentInput;
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    firstOperand = result;
    updateScreen();
}

function clearScreen() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateScreen();
}

function updateScreen() {
    document.getElementById('screen').value = currentInput;
}

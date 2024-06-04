let display = document.getElementById('display');
let btn = document.getElementsByClassName('btn');

for (let object of btn) {
    object.addEventListener('click', function(e) {
        let btnValue = e.target.textContent;
        if (!isNaN(btnValue) || btnValue === '.') {
            display.value += btnValue;
        }
    })
}

function division() {
    display.value += '/'
}

function multiply() {
    display.value += '*'
}

function subtract() {
    display.value += '-'
}

function addition() {
    display.value += '+'
}

function equal() {
    // Credit to W3Schools on how to use the replace method so that the true values of e and pi aren't dispalyed on the calculator: https://www.w3schools.com/jsref/jsref_replace.asp
    display.value = eval(display.value.replace(/π/g, Math.PI).replace(/e/g, Math.E));
}

function percent() {
    if (display.value) {
        display.value = (parseFloat(display.value) / 100).toString();
    }
}

function plusMinus() {
    display.value = display.value * (-1);
}

function clearDisplay() {
    display.value = '';
}

function factorial() {
    
}

function openBrace() {
    display.value += '('
}

function closedBrace() {
    display.value += ')'
}

function xPowTwo() {
    display.value = Math.pow(parseFloat(display.value), 2).toString();
}

function xPowThree() {
    display.value = Math.pow(parseFloat(display.value), 3).toString();
}

function xSqrtTwo() {
    display.value = Math.sqrt(parseFloat(display.value), 2).toString();
}

function xSqrtThree() {
    display.value = Math.sqrt(parseFloat(display.value), 3).toString();
}

function sin() {
    display.value = Math.sin(parseFloat(display.value * Math.PI / 180))
}

function cos() {
    display.value = Math.cos(parseFloat(display.value * Math.PI / 180))
}

function tan() {
    display.value = Math.tan(parseFloat(display.value * Math.PI / 180))
}

function log() {
    if (display.value > 0 ) {
        display.value = Math.log10(parseFloat(display.value)).toString();
    } else {
        display.value = 'Error';
    }
}

function inverse() {
    display.value = 1/(display.value);
}
function e() {
    display.value += 'e'
}

function pi() {
    display.value += 'π'
}
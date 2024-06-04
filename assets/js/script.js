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
    display.value = eval(display.value);
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
    
}

function closedBrace() {
    
}

function xPowTwo() {
    display.value = Math.pow(parseFloat(display.value), 2).toString();
}

function xPowThree() {
    display.value = Math.pow(parseFloat(display.value), 3).toString();
}

function xPowY() {
    
}

function xSqrtTwo() {
    
}

function xSqrtThree() {
    
}

function xSqrtY() {
    
}

function sin() {
    
}

function cos() {
    
}

function tan() {
    
}

function log() {
    
}

function e() {
    
}

function pi() {
    
}
let display = document.getElementById('display');
let btn = document.getElementsByClassName('btn');

for (object of btn) {
    object.addEventListener('click', function(e) {
        let btnValue = e.target.textContent;
        if (!isNaN(btnValue) || btnValue === '.') {
            display.value += btnValue;
        }
    })
}

function division() {

}

function multiply() {
    
}

function subtract() {
    
}

function addition() {
    
}

function equal() {
    
}

function percent() {
    
}

function plusMinus() {
    
}

function clear() {
    
}

function factorial() {
    
}

function openBrace() {
    
}

function closedBrace() {
    
}

function xPowTwo() {
    
}

function xPowThree() {
    
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
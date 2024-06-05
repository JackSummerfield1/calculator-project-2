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
    try {
        if (display.value.includes('log(')) {
            let start = display.value.indexOf('log(') + 4; // Indicates the initial index of the number in question
            let end = display.value.indexOf(')', start); // Indicates the final index of the number in question
            
            if (end !== -1) { // Ensures there must be a closing brace after number in question is entered, otherwise function doesn't work
                let num = parseFloat(display.value.substring(start, end));

                if (num > 0) {
                    display.value = Math.log10(num); // Numbers less than or equal to 0 cannot be logged, hence num > 0
                } else {
                    display.value = 'Error'
                }
            } else {
                display.value = 'Error'
            }
        } else if (display.value.includes('sin(')) {
            let start = display.value.indexOf('sin(') + 4;
            let end = display.value.indexOf(')', start);

            if (end !== -1) {
                let num = parseFloat(display.value.substring(start, end));
                // No limitations for the sinx function as x can be any number
                display.value = Math.sin(parseFloat(num * Math.PI / 180))
            } else {
                display.value = 'Error'
            }
        } else if (display.value.includes('cos(')) {
            let start = display.value.indexOf('cos(') + 4;
            let end = display.value.indexOf(')', start);

            if (end !== -1) {
                let num = parseFloat(display.value.substring(start, end));
                // No limitations for the cosx function as x can be any number
                display.value = Math.cos(parseFloat(num * Math.PI / 180))
            } else {
                display.value = 'Error'
            }
        } else if (display.value.includes('tan(')) {
            let start = display.value.indexOf('tan(') + 4;
            let end = display.value.indexOf(')', start);

            if (end !== -1) {
                let num = parseFloat(display.value.substring(start, end));
                if (num % 90 === 0 && ((num / 90 - 1) % 2 === 0)) { // x values of tanx that are an odd multiple of 90 (ie. (2n+1)*90) are undefined, hence an error is shown
                    display.value = 'Error';
                } else {
                    display.value = Math.tan(parseFloat(num * Math.PI / 180));
                }
            } else {
                display.value = 'Error'
            }
        } else {
            display.value = eval(display.value.replace(/π/g, Math.PI).replace(/e/g, Math.E)); // Credit to W3Schools on how to use the replace method so that the true values of e and pi aren't dispalyed on the calculator: https://www.w3schools.com/jsref/jsref_replace.asp
        }
    } catch (e) {
        display.value = 'Error';
    }

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
    display.value += 'sin('//Math.sin(parseFloat(display.value * Math.PI / 180))
}

function cos() {
    display.value = 'cos('//Math.cos(parseFloat(display.value * Math.PI / 180))
}

function tan() {
    display.value = 'tan('//Math.tan(parseFloat(display.value * Math.PI / 180))
}

function log() {
    display.value += 'log('
    // if (display.value > 0 ) {
    //     display.value = Math.log10(parseFloat(display.value)).toString();
    // } else {
    //     display.value = 'Error';
    // }
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
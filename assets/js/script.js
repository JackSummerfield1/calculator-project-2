let display = document.getElementById("display");
let btn = document.getElementsByClassName("btn");

for (let object of btn) {
  object.addEventListener("click", function (e) {
    let btnValue = e.target.textContent;
    if (!isNaN(btnValue) || btnValue === ".") {
      display.value += btnValue;
    }
  });
}

// Credit to chat.openai.com for assistance with fixing some of these, it helped me debug the closing brace sections
/**
 * This function allows for expressions to be entered into the display
 * and it will calculate the exact answer for you
 */
function equal() {
  try {
    let exp = display.value;
    let fName = '';

    if (exp.includes('log(')) {
      fName = 'log';
    } else if (exp.includes('sin(')) {
      fName = 'sin';
    } else if (exp.includes('cos(')) {
      fName = 'cos';
    } else if (exp.includes('tan(')) {
      fName = 'tan';
    } else if (exp.includes('ln(')) {
      fName = 'ln';
    }

    switch(fName) {
      case 'log':
        return logCalc();
      break;
      case 'sin':
        return sinCalc();
      break;
      case 'cos':
        return cosCalc();
      break;
      case 'tan':
        return tanCalc();
      break;
      case 'ln':
        return lnCalc();
      break;
      default: {
        display.value = eval(
          display.value.replace(/π/g, Math.PI).replace(/e/g, Math.E)
        ); // Credit to W3Schools on how to use the replace method so that the true values of e and pi aren't dispalyed on the calculator: https://www.w3schools.com/jsref/jsref_replace.asp
      }}
} catch (e) {
  display.value = "Error";
}}

function division() {
  display.value += "/";
}

function multiply() {
  display.value += "*";
}

function subtract() {
  display.value += "-";
}

function addition() {
  display.value += "+";
}

function logCalc() {
  let start = display.value.indexOf("log(") + 4; // Indicates the initial index of the number in question
  let end = display.value.indexOf(")", start); // Indicates the final index of the number in question

  if (end !== -1) {
    // Ensures there must be a closing brace after number in question is entered, otherwise function doesn't work
    let num = eval(display.value.substring(start, end));

    display.value = num > 0 ? Math.log10(num) : "Error"; // Use of a ternary operator, function is then more readable
  } else {
    display.value = "Error";
  }
}

function sinCalc() {
  let start = display.value.indexOf("sin(") + 4;
  let end = display.value.indexOf(")", start);

  if (end !== -1) {
    let num = eval(display.value.substring(start, end));
    // No limitations for the sinx function as x can be any number
    display.value = Math.sin(parseFloat((num * Math.PI) / 180));
  } else {
    display.value = "Error";
  }
}

function cosCalc() {
  let start = display.value.indexOf("cos(") + 4;
  let end = display.value.indexOf(")", start);

  if (end !== -1) {
    let num = parseFloat(display.value.substring(start, end));
    // No limitations for the cosx function as x can be any number
    display.value = Math.cos(eval((num * Math.PI) / 180));
  } else {
    display.value = "Error";
  }
}

function tanCalc() {
  let start = display.value.indexOf("tan(") + 4;
  let end = display.value.indexOf(")", start);

  if (end !== -1) {
    let num = parseFloat(display.value.substring(start, end));
    display.value =
      num % 90 === 0 && (num / 90 - 1) % 2 === 0
        ? "Error"
        : Math.tan(eval((num * Math.PI) / 180));
  } else {
    display.value = "Error";
  }
}

function lnCalc() {
  let start = display.value.indexOf("ln(") + 3;
  let end = display.value.indexOf(")", start);

  if (end !== -1) {
    let num = eval(display.value.substring(start, end));
    display.value = num > 0 ? Math.log(num) : "Error";
  } else {
    display.value = "Error";
  }
}

function percent() {
  if (display.value) {
    display.value = (parseFloat(display.value) / 100).toString();
  }
}

function plusMinus() {
  display.value = display.value * -1;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function openBrace() {
  display.value += "(";
}

function closedBrace() {
  display.value += ")";
}

function xPowTwo() {
  display.value = Math.pow(parseFloat(display.value), 2).toString();
}

function xPowThree() {
  display.value = Math.pow(parseFloat(display.value), 3).toString();
}

function xSqrt() {
  display.value = Math.sqrt(parseFloat(display.value)).toString();
}

function xCbrt() {
  display.value = Math.cbrt(parseFloat(display.value)).toString();
}

function sin() {
  display.value += "sin(";
}

function cos() {
  display.value = "cos(";
}

function tan() {
  display.value = "tan(";
}

function log() {
  display.value += "log(";
}

function ln() {
  display.value += "ln(";
}

function inverse() {
  display.value = 1 / display.value;
}

function e() {
  display.value += "e";
}

function pi() {
  display.value += "π";
}

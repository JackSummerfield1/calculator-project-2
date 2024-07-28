let display = document.getElementById("display");
let btn = document.getElementsByClassName("btn");
let storedValue = null;

for (let object of btn) {
  object.addEventListener("click", function (e) {
    let btnValue = e.target.textContent;
    if (!isNaN(btnValue) || btnValue === ".") {
      // Ensures that the button clicked is a valid number or a '.'
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
    let fName = "";

    // Allows for computer to recognise if the display contains a specific
    // mathematical function, then the correct one is run

    if (exp.includes("log(")) {
      fName = "log";
    } else if (exp.includes("sin(")) {
      fName = "sin";
    } else if (exp.includes("cos(")) {
      fName = "cos";
    } else if (exp.includes("tan(")) {
      fName = "tan";
    } else if (exp.includes("ln(")) {
      fName = "ln";
    }

    switch (fName) {
      // Use of a switch-case scenario to maximise performance of the program
      case "log":
        return logCalc();
        break;
      case "sin":
        return sinCalc();
        break;
      case "cos":
        return cosCalc();
        break;
      case "tan":
        return tanCalc();
        break;
      case "ln":
        return lnCalc();
        break;
      default: {
        display.value = eval(
          display.value.replace(/π/g, Math.PI).replace(/e/g, Math.E)
        ); // Credit to W3Schools on how to use the replace method so that the true values of e and pi aren't dispalyed on the calculator: https://www.w3schools.com/jsref/jsref_replace.asp
      }
    }
  } catch (e) {
    display.value = "Error";
  }
}

/**
 * This function allows for an equation to be calculated
 * within the brackets of the log function ie. log(7+3)
 * and completes the log function, including its limitations
 */
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

/**
 * This function allows for an equation to be calculated
 * within the brackets of the sin function ie. sin(7+3)
 * and completes the sin function
 */
function sinCalc() {
  let start = display.value.indexOf("sin(") + 4;
  let end = display.value.indexOf(")", start);

  if (end !== -1) {
    let num = eval(display.value.substring(start, end));
    // No limitations for the sinx function as x can be any number
    display.value = Math.sin((num * Math.PI) / 180);
  } else {
    display.value = "Error";
  }
}

/**
 * This function allows for an equation to be calculated
 * within the brackets of the cos function ie. cos(7+3)
 * and completes the cos function
 */
function cosCalc() {
  let start = display.value.indexOf("cos(") + 4;
  let end = display.value.indexOf(")", start);

  if (end !== -1) {
    let num = eval(display.value.substring(start, end));
    // No limitations for the cosx function as x can be any number
    display.value = Math.cos((num * Math.PI) / 180);
  } else {
    display.value = "Error";
  }
}

/**
 * This function allows for an equation to be calculated
 * within the brackets of the tan function ie. tan(7+3)
 * and completes the tan function, including its limitations
 */
function tanCalc() {
  let start = display.value.indexOf("tan(") + 4;
  let end = display.value.indexOf(")", start);

  if (end !== -1) {
    let num = eval(display.value.substring(start, end));
    display.value =
      num % 90 === 0 && (num / 90 - 1) % 2 === 0
        ? "Error"
        : Math.tan((num * Math.PI) / 180);
  } else {
    display.value = "Error";
  }
}

/**
 * This function allows for an equation to be calculated
 * within the brackets of the ln function ie. ln(7+3)
 * and completes the ln function, including its limitations
 */
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

/**
 * This function comepletes division expressions
 */
function division() {
  display.value += "/";
}

/**
 * This function completes multiplication expressions
 */
function multiply() {
  display.value += "*";
}

/**
 * This function completes subtraction expressions
 */
function subtract() {
  display.value += "-";
}

/**
 * This function completes addition expressions
 */
function addition() {
  display.value += "+";
}

/**
 * This function completes the percentage of a number ie. dividing it by 100
 */
function percent() {
  if (display.value) {
    display.value = (parseFloat(display.value) / 100).toString();
  }
}

/**
 * This function inverts the numbers positivity, ie. 1 -> -1
 */
function plusMinus() {
  display.value = display.value * -1;
}

/**
 * This function clears the display completely
 */
function clearDisplay() {
  display.value = "";
}

/**
 * This function deletes the final character on the display
 */
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

/**
 * This function inserts an open brace to the display
 */
function openBrace() {
  display.value += "(";
}

/**
 * This function inserts a closed brace to the display
 */
function closedBrace() {
  display.value += ")";
}

/**
 * This function squares the value in the display
 */
function xPowTwo() {
  display.value = Math.pow(parseFloat(display.value), 2).toString();
}

/**
 * This function cubes the value in the display
 */
function xPowThree() {
  display.value = Math.pow(parseFloat(display.value), 3).toString();
}

/**
 * This function completes the square root of the value in the display
 */
function xSqrt() {
  display.value = Math.sqrt(parseFloat(display.value)).toString();
}

/**
 * This function completes the cube root of the value in the display
 */
function xCbrt() {
  display.value = Math.cbrt(parseFloat(display.value)).toString();
}

/**
 * This adds sin( to the terminal, which can then be recognised by the equal func
 * above to then complete the trig sine function
 */
function sin() {
  display.value += "sin(";
}

/**
 * This adds cos( to the terminal, which can then be recognised by the equal func
 * above to then complete the trig cosine function
 */
function cos() {
  display.value = "cos(";
}

/**
 * This adds tan( to the terminal, which can then be recognised by the equal func
 * above to then complete the trig tangent function
 */
function tan() {
  display.value = "tan(";
}

/**
 * This adds log( to the terminal, which can then be recognised by the equal func
 * above to then complete the mathematical logarithmic function
 */
function log() {
  display.value += "log(";
}

/**
 * This adds ln( to the terminal, which can then be recognised by the equal func
 * above to then complete the natural logarithmic function
 */
function ln() {
  display.value += "ln(";
}

/**
 * This completes the inverse of a number, ie. x -> 1 / x
 */
function inverse() {
  display.value = 1 / display.value;
}

/**
 * This displays the value e to the terminal
 */
function e() {
  display.value += "e";
}

/**
 * This displays the value pi to the terminal
 */
function pi() {
  display.value += "π";
}

/**
 * This function allows for current value displayed on the calc screen
 * to be stored as memory if needed to be used later
 */
function storeValue() {
  let currentValue = display.value;
  storedValue = currentValue;
  alert(`You successfully stored this value: ${display.value}`);
}

/**
 * This function allows for a previous value that has been stored
 * to be recalled onto the calcs display
 */
function recallValue() {
  display.value += storedValue;
}

// Credit to https://www.shecodes.io/athena/9423-change-the-class-name-of-an-html-element-with-javascript for assistance on changing class name when a button is clicked

/**
 * This function acts as a dropdown for the sci functions on smaller
 * screens, allows the app to be more responsive
 */
function changeClass() {
  let elements = document.querySelectorAll(".hide, .visible");
  for (let element of elements) {
    if (element.classList.contains("hide")) {
      element.classList.replace("hide", "visible");
    } else if (element.classList.contains("visible")) {
      element.classList.replace("visible", "hide");
    }
  }
}

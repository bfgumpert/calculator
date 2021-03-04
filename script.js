function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function multiply (a,b) {
	return a * b;
}

function divide (a,b) {
    return a / b;
}

function power(num, power) {
	let base = num;
	for(let i = 0; i < power - 1; i++) {
		num = num * base;
	}
	return num;
}

function factorial(num) {
	let result = 1;
	if (num != 0) {
		for(let i = 1; i < num + 1; i++) {
			result = i * result;
		}
	}
	return result;
}

function operate(operator, a, b) {
    switch(operator) {
        case "addition":
            return add(a,b);
        case "subtraction":
            return subtract(a,b);
        case "multiplication":
            return multiply(a,b);
        case "division":
            return divide(a,b);
    }
}

function pressNumButtton() {
    //replace zero with number pressed
    numberClass.forEach(function(e) {
        e.addEventListener("click", function(ele) {
            if (display.textContent == "0") {
                display.textContent = e.textContent;
            }
            else {
                display.textContent += e.textContent;
            }
        });
    });
}

function pressOperatorButtton() {
    //3 conditions, 1 if no operator exists AND last input is number > add operator, 2 is if last input is a space > change operator, 3 is if ope
    //operator exists AND last input is number > calculate and input new operators
    operatorClass.forEach(function(e) {
        e.addEventListener("click", function(ele) {
            if (display.textContent.indexOf("+") < 0 &&
                display.textContent.indexOf("-") < 0 &&
                display.textContent.indexOf("X") < 0 &&
                display.textContent.indexOf("/") < 0 &&
                Number.isInteger(Number(display.textContent.substr(-1)))) {
                display.textContent += " " + e.textContent + " ";
            }
            else if (display.textContent.substr(-1) == " ") {
                display.textContent = display.textContent.slice(0, display.textContent.length - 2) + " " + e.textContent + " ";
            }
            else if (display.textContent.indexOf("+") > 0 ||
                    display.textContent.indexOf("-") > 0 ||
                    display.textContent.indexOf("X") > 0 ||
                    display.textContent.indexOf("/") > 0 &&
                    Number.isInteger(Number(display.textContent.substr(-1)))) {
                equal.click();
                display.textContent += " " + e.textContent + " ";
            }
        });
    });
}

function pressEqualButton() {
    equal.addEventListener("click", function(e) {
        let operator = "";
        let operatorIndex = 0;
        if (Number.isInteger(Number(display.textContent.substr(-1))) && display.textContent.substr(-3) != "/ 0") {
            if (display.textContent.indexOf("+") > 0) {
                operator = "addition";
                operatorIndex = display.textContent.indexOf("+");
            }
            else if (display.textContent.indexOf("-") > 0) {
                operator = "subtraction";
                operatorIndex = display.textContent.indexOf("-");
            }
            else if (display.textContent.indexOf("X") > 0) {
                operator = "multiplication";
                operatorIndex = display.textContent.indexOf("X");
            }
            else if (display.textContent.indexOf("/") > 0) {
                operator = "division";
                operatorIndex = display.textContent.indexOf("/");
            }
            let num1 = Number(display.textContent.slice(0, operatorIndex - 1));
            let num2 = Number(display.textContent.slice(operatorIndex + 1));
            display.textContent = operate(operator, num1, num2);
        }
        else if (display.textContent.substr(-3) == "/ 0") {
            display.textContent = 0;
            alert("world exploded cause you divided by 0");
        }
        else {
            display.textContent = 0;
        }
    });
}

function pressClearButton() {
    clear.addEventListener("click", function(e) {
        display.textContent = 0;
    })
}

let numberClass = document.querySelectorAll('.numBtn');
let operatorClass = document.querySelectorAll('.operatorBtn');
display.textContent = "0";
pressNumButtton();
pressOperatorButtton();
pressEqualButton();
pressClearButton();
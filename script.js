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
        case addition:
            add(a,b);
            break;
        case subtraction:
            subtract(a,b);
            break;
        case multiplication:
            multiply(a,b);
            break;
        case division:
            divide(a,b);
            break;
    }
}
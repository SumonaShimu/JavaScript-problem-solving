//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculator = (num1, operator, num2) => {
    if (operator == '+')
        return num1 + num2;
    else if (operator == '-')
        return num1 - num2;
    else if (operator == '*')
        return num1 * num2;
    else if (operator == '/')
        return num1 / num2;
    else return ("Invalid operator");
}

const add = calculator(5, '+', 3);
const subs = calculator(5, '-', 3);
const multiply = calculator(5, '*', 3);
const devide = calculator(15, '/', 3);
console.log(multiply); 

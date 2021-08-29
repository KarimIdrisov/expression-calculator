function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    function trimArray(arr) {
        return arr.filter(item => item !== null);
    }

    function calculate(operator, firstArg, secondArg) {
        switch (operator) {
            case '+':
                return +firstArg + +secondArg;
            case '-':
                return firstArg - secondArg;
            case '*':
                return firstArg * secondArg;
            case '/':
                if (+secondArg === 0) {
                    throw 'TypeError: Division by zero.';
                }
                return firstArg / secondArg;
        }
    }

    function checkBrackets(str) {
        let stack = [];

        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                stack.push('(');
            } else {
                if (str[i] === ')') {
                    if (stack.length === 0) {
                        return false;
                    }
                    stack.pop();
                }
            }
        }

        return stack.length === 0;
    }

    function calculateBracketsExpr(str) {
        str = calculateStrongOperations(str);
        str = calculateWeakOperations(str);

        return str[0];
    }

    function calculateBracketsOperations(str) {
        let openIndex = -1;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') {
                openIndex = i;
            }
            if (str[i] == ')') {
                let expr = calculateBracketsExpr(str.slice(openIndex + 1, i));
                for (let j = openIndex; j < i; j++) {
                    str[j] = null;
                }
                str = trimArray(str);
                str[openIndex] = expr;
                calculateBracketsOperations(str);
            }
        }

        return str;
    }

    function calculateStrongOperations(str) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '*' || str[i] === '/') {
                const result = calculate(str[i], str[i - 1], str[i + 1]);
                str[i] = result;
                str[i - 1] = null;
                str[i + 1] = null;
                str = trimArray(str);
                i = 0;
            }
        }

        return str;
    }

    function calculateWeakOperations(str) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '+' || str[i] === '-') {
                const result = calculate(str[i], str[i - 1], str[i + 1]);
                str[i] = result;
                str[i - 1] = null;
                str[i + 1] = null;
                str = trimArray(str);
                i = 0;
            }
        }

        return str;
    }

    function divideExpr(str) {
        let newArray = [];
        let number = '';
        const operations = ['+', '-', '*', '/', '(', ')'];
        for (let i = 0; i < str.length; i++) {
            if (!operations.includes(str[i])) {
                number += str[i];
            } else {
                newArray.push(number);
                newArray.push(str[i]);
                number = '';
            }
        }
        newArray.push(number);
        newArray = newArray.filter(item => item !== '');
        return newArray.filter(item => item !== ' ');
    }

    let exprArray = divideExpr(expr);
    if (!checkBrackets(exprArray)) {
        throw 'ExpressionError: Brackets must be paired';
    }
    exprArray = calculateBracketsOperations(exprArray)
    exprArray = calculateStrongOperations(exprArray);
    exprArray = calculateWeakOperations(exprArray);
    return +exprArray[0];
}

module.exports = {
    expressionCalculator
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        default:
            return 'Invalid operation';
    }
}

rl.question('Enter the first number: ', (firstInput) => {
    const num1 = parseFloat(firstInput);

    rl.question('Enter the second number: ', (secondInput) => {
        const num2 = parseFloat(secondInput);

        rl.question('Enter the operation (+, -, *, /): ', (operation) => {
            const result = calculate(num1, num2, operation);
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});

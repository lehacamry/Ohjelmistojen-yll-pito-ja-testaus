const { add, subtract, multiply, divide, isEven } = require("./src/mylib");

function mathOperations(a, b) {
    console.log(`Add: ${add(a, b)}`);
    console.log(`Subtract: ${subtract(a, b)}`);
    console.log(`Multiply: ${multiply(a, b)}`);
    console.log(`Divide: ${divide(a, b)}`);
    console.log(`Is ${a} even? ${isEven(a)}`);
    console.log(`Is ${b} even? ${isEven(b)}`);
}

function main() {
    mathOperations(10, 5);
}

if (require.main === module) {
    main();
}
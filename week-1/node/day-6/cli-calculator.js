const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("Usage: node calculator.js <operation> <num1> <num2>");
  console.log("Example: node calculator.js add 5 3");
  process.exit(1);
}

let result;

switch (operation) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
    break;
  default:
    console.log("Unsupported operation. Use add, sub, mul, or div.");
    process.exit(1);
}

console.log(`Result: ${result}`);

let principal = prompt("Enter principal amount:");
let rate = prompt("Enter interest rate:");
let time = prompt("Enter time in years:");
let n = prompt("Enter number of times interest applied per time period:");

let amount = principal * Math.pow(1 + (rate / (100 * n)), n * time);
let compoundInterest = amount - principal;

alert(`Compound interest is: ${compoundInterest.toFixed(2)}`);

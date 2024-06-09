const exchangeRate = 1510; // Exchange rate of 1 USD to Naira

let nairaAmount = prompt("Enter amount in Naira:");
let dollarAmount = nairaAmount / exchangeRate;

alert(`Amount in dollars: $${dollarAmount.toFixed(2)}`);

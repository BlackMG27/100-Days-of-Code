const phonePrice = 99.99;
const taxRate = 0.11;
const accessories = 16;
const spendingThreshold = 250;

var bankBalance = prompt("How much money is your bank account?");
var amount = 0;

function calculateTax(amount){
  return amount * taxRate;
}

function formatAmount(amount){
  return "$" + amount.toFixed(2);
}

while(amount < bankBalance){
  amount = amount + phonePrice;
  console.log("Get that phone!");

  if(amount < spendingThreshold){
    amount = amount + accessories;
    console.log("You've got to get the accessories!");
  }

  amount = amount + calculateTax(amount);

  console.log("Your purchase was: " + amount);

  if(amount > bankBalance){
    console.log("You can't afford this, Sorry :(");
  }
}

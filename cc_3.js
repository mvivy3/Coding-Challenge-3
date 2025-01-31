// Task 1: Product Price Management
let price  = [3400, 6800, 2300, 1500, 5000]; // Array of prices

price.push(9698); // Add a new price to the end of the array
price.pop(); // Remove the last price from the array

console.log("Updated price list", price); // Log the updated prices 



// Task 2: Modifying Customer Orders
let quantity = [100, 200, 300, 400, 500]; // Array of quantities
quantity[2] +=5; // Increase the third order quantity by 5
console.log("Updated Array", quantity); // Log the updated array

let totalQuantity = quantity.reduce((total, amount) => total + amount, 0); // Calculate the total number of all orders
console.log(`Total Quantity: $${totalQuantity}`); // Log the total order count

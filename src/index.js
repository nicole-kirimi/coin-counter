// Coin counter function using closure and recursion

function coinCounter() {
    // Define the values of each coin
    const coinValues = {
        quarters: 25,
        dimes: 10,
        nickels: 5,
        pennies: 1
    };

    // Closure function to calculate coins for a specific type
    function calculateCoins(coinType, amount) {
        // Base case: If the amount is 0, return 0
        if (amount === 0) {
            return 0;
        }

        // Find the largest coin value less than or equal to the amount
        let largestCoin = '';
        for (let coin in coinValues) {
            if (coinValues[coin] <= amount) {
                largestCoin = coin;
                break;
            }
        }

        // Calculate the number of the largest coin needed
        const numCoins = Math.floor(amount / coinValues[largestCoin]);

        // Calculate the remaining amount after using the largest coin
        const remainingAmount = amount % coinValues[largestCoin];

        // Recursively call the closure function for the remaining amount
        return numCoins + calculateCoins(coinType, remainingAmount);
    }

    // Return an object containing functions for each coin type
    return {
        quarters: amount => calculateCoins('quarters', amount),
        dimes: amount => calculateCoins('dimes', amount),
        nickels: amount => calculateCoins('nickels', amount),
        pennies: amount => calculateCoins('pennies', amount)
    };
}

// Test the coin counter function
const amount = 499; // $4.99
const counter = coinCounter();
console.log({
    quarters: counter.quarters(amount),
    dimes: counter.dimes(amount),
    nickels: counter.nickels(amount),
    pennies: counter.pennies(amount)
});

const prices = [99.99, 199.99, 250, 300, 499, 1000]
// 19%
const tax = 0.19

const taxAdjustedPrices = []

// simple method
for (let price of prices) {
    taxAdjustedPrices.push(price * (1 + tax))
}

// console.log(taxAdjustedPrices.map((item) => Number(item.toFixed(3))));

// rather than using for loop we can use forEach which loops over an array and perform some operations
prices.forEach((value, index) => {
    taxAdjustedPrices.push(Number((value * (1 + tax)).toFixed(3)))
})
console.log(taxAdjustedPrices);
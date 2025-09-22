/* 
In Javascript, every number is a float. it doesnot have special integer types
Numbers are stored as 64 bit floating points in javascript. 1 bit is used to indicate sign (+ or -)
*/

// biggest possible integer that can be represented in JS
// this is equivalent to Math.pow(2,53)-1
console.log(Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53) - 1);

// smallest possible integer that can be represented in JS
console.log(Number.MIN_SAFE_INTEGER);


/*
Floating Point Arithmetic

We can see that when we add 0.2 and 0.4, the output is not exactly 0.6. The reason for this is when numbers are stored they are stored in binary format and 
0.2 -> binary will be (repeating binary 0.0011001100110011… )
0.4 -> binary will be (repeating binary 0.011001100110011…)
They are approximated in memory as they cannot be exactly represented.
When we perform addition, the binary approximation values for each of them will be added. So it result in some rounding error.
*/
console.log(0.2 + 0.4) // 0.6000000000000001

// we can check what is the value of 0.2 in binary using this method
// toString(radix?) takes radix which means 2 for binary, 10 for decimal 
console.log((0.2).toString(2)) // 0.001100110011001100110011001100110011001100110011001101
console.log((0.4).toString(2)) // 0.01100110011001100110011001100110011001100110011001101


/* 
We do have a BigInt in JS which can be used to numbers that cannot be fit into MAX_SAFE_INTEGER. We ca
represent it by using n postfix at the end of any number 
for example:

let num:bigint = 12080981209380128903809128n 

*/
// can only hold integer values
let num = 921n
console.log(921n + 79n); // 1000n



/* 
Write a function to generate a random number between two range of numbers
*/

function generateRandomNumberWithRange(lower, upper) {
    // this will give the range from 5 to 9.9999999
    // return Math.random() * (upper - lower) + lower

    // if we also want to include 10 then we can do 
    // upper-lower+1 will make 10.999999... also available so we floor it.
    return Math.floor(Math.random() * (upper - lower + 1) + lower)
}

console.log(`Random number between range:`, generateRandomNumberWithRange(5, 10));
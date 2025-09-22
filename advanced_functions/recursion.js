

// The recursive way of calculating the power of n.
function powerOF(x, n) {
    if (n == 0) return 1
    return x * powerOF(x, n - 1)
}

// console.log(powerOF(2, 3))


// Recursive way to calcualate fibonnacci series


function print1ToN(n) {
    if (n == 0) return
    print1ToN(n - 1)
    console.log(n);

}
// print1ToN(10)

function printNTo1(n) {
    if (n == 0) return
    console.log(n);
    printNTo1(n)
}
// prints from 10 to 1
// printNTo1(10)


// function to calculate the factorial
function factorial(n) {
    if (n == 0 || n == 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))


// function for Nth fibonacci number

function NthFibbonacci(n) {
    if (n === 0) return 0
    if (n == 1) return 1
    return NthFibbonacci(n - 1) + NthFibbonacci(n - 2)
}

console.log("Nth fibonacci", NthFibbonacci(10))


// function to calculate sum up to N

function sumToN(n) {
    if (n == 0) return 0
    return n + sumToN(n - 1)
}

console.log("Sum to N:", sumToN(10));


// check if string is palindrom using recursion

function isPalindrome(str, left = 0, right = str.length - 1) {
    if (left >= right) return true
    if (str[left] !== str[right]) return false
    return isPalindrome(str, left + 1, right - 1)
}
console.log("IsPalindrome:", isPalindrome("madam"));


// function occurence of characters

// basic function loop approach (non-recursion method)
function countOccurenceCharacters(word) {
    const freq = new Map()
    for (const char of word) {
        freq.has(char) ? freq.set(char, freq.get(char) + 1) : freq.set(char, 1)
    }
    return freq
}
console.log(countOccurenceCharacters("sentence"));

// using recursion
// base condition is required to know when do we stop the loop

function countOccurenceCharactersUsingRecursion(word, freq = new Map()) {
    if (!word.length) return freq
    // grab the first char from the word
    const char = word[0]
    // check and count in map
    if (freq.has(char)) {
        freq.set(char, freq.get(char) + 1)
    } else {
        freq.set(char, 1)
    }
    // call it again removing the first element from the string
    return countOccurenceCharactersUsingRecursion(word.slice(1), freq)
}

console.log("Count using recursion", countOccurenceCharactersUsingRecursion("banana"));




// use recursion inside a nested object to calculate sum of all the numbers

const data = {
    a: 2,
    b: {
        b1: 3,
        b2: { x: 5, y: 7 },
    },
    c: 10,
    d: [1, 2, { z: 4 }]
};

// base condtion where we need to terminated loop
// check for Array condition and Object condition
function calculateSumOfAllNumbers(data) {
    let sum = 0
    if (typeof data === "number") {
        return data
    }
    if (Array.isArray(data)) {
        for (const item of data) {
            sum += calculateSumOfAllNumbers(item)
        }
    } else if (data !== null && typeof data === "object") {
        for (const key in data) {
            sum += calculateSumOfAllNumbers(data[key])
        }
    }
    return sum
}

console.log("Sum of Numbers inside object:", calculateSumOfAllNumbers(data));


// function to find the maximum number in a nested array

const arr = [1, 2, 3, 4, [5, 6, 7, [9, 10, 11], 12, 13], [45, 46], 14, 15]

function calculateMaxNum(arr) {
    let max = -Infinity

    for (const item of arr) {
        if (typeof item === "number") {
            max = Math.max(max, item)
        }
        if (Array.isArray(item)) {
            max = Math.max(max, calculateMaxNum(item))
        }
    }
    return max
}

console.log("Calculate Max Num:",calculateMaxNum(arr));
/* 
Symbol is a new primitive type in JS introduced in ES6. It allows us to provide a uniqueness to a property inside an object which cannot be modified or accessed by external code.

*/

const uniqueId = Symbol('id')
const obj = {
    [uniqueId]: "123",
    name: "prayash"
}
console.log("Before changing symbol values:", obj);

// we cannot access the id when looping over here
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value); // name prayash
}
// we can access the property with `[]` notation but not with `.` notation
console.log("Accessing Symbol value:", obj[uniqueId]) // 123

// we can change it this way
obj[uniqueId] = "456"
console.log("After Symbol value changed:", obj);

console.log("Cannot acess with dot notation:", obj.uniqueId); // undefined



/*
***Iterables and Iterators***

1. Iterables are anhy objects that implements Symbol.iterator method. It can be looped over using for...of construct. Calling a Symbol.iterator returns an iterator.

Technically, iterables must implement the Symbol.iterator method.
In JavaScript the following are iterables:

- Strings
- Arrays
- Typed Arrays
- Sets
- Maps
Because their prototype objects have a Symbol.iterator method


2. Iterators is like a method defines how to produce next value in the sequence. It can be done my implementing a next() function inside an object as it defines a technique to produce next valuein the sequence.

The next() method must return an object with two properties:

- value (the next value) ->  The value returned by the iterator. (Can be omitted if done is true)
- done (true of false) -> true if the iterator has completed. false if the iterator has produced a new value

*/

const arr = [10, 20, 30];

console.log("Type of Symbol.Iterator:", typeof arr[Symbol.iterator]); // "function" which provides mechanism to loop=> it's iterable


// creating a own iterable using concept of iterable. But this custom made iterable like this doesnot support for...of loop

function myNumbers() {
    let n = 0

    return {
        next: function () {
            n += 10
            return {
                value: n, done: false
            }
        }
    }
}

const n = myNumbers()

for (let i = 0; i < 10; i++) {
    console.log(n.next().value);
}


// To create our iterable that supports for..of, it must implement a Symbol.iterator that returns next() function
// we put a limit to number less than 10

const numbers = {}
numbers[Symbol.iterator] = function () {

    let n = 0
    let done = false

    return {
        next() {
            n += 1
            if (n == 10) done = true
            return {
                value: n,
                done
            }
        }
    }
}

console.log("From custom implemented iterator using Symbol.Iterator:");
for (const num of numbers) {
    console.log(num);
}


// Another example of implementing own iterable

const company = {
    trackEmployee: 0,
    employees: ['Prayash', "Raman", "Chiran", "Ashim"],
    next() {
        if (this.trackEmployee >= this.employees.length) {
            return {
                value: this.trackEmployee,
                done: true
            }
        }
        const returnValue = {
            value: this.employees[this.trackEmployee],
            done: false
        }
        this.trackEmployee++
        return returnValue

    }
}
// we can iterate over this using this approach
console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());
console.log(company.next());


// If we want it to be iterable using for...of, we need to implement Symbol.Iterator function that handles the iteration logic.


company[Symbol.iterator] = function () {
    let trackEmployee = 0;
    const employees = ['Prayash', "Raman", "Chiran", "Ashim"];
    return {
        next() {
            if (trackEmployee >= employees.length) {
                return {
                    value: trackEmployee,
                    done: true
                }
            }
            const returnValue = {
                value: employees[trackEmployee],
                done: false
            }
            trackEmployee++
            return returnValue

        }
    }
}

// we can use this now as we have implemented Symbol.Iterator function where our logic sits.
for (const emp of company) {
    console.log(emp); // Prayash Raman Chiran Ashim
}


// we can also create a iterator using Iterator function
const myIterator = Iterator.from([1, 2, 3, 4, 5, 6]);
console.log("Iterator:", myIterator);



// The best way to create a iterator object is using generator 
/*
Generators are special type of functions that can pause and resume execution later.
- It automatically implements the iterator protocol.
- Returns an iterator when called, allowing you to get values one by one using next().

We can define a generator(function) using  function* () {} `Note: * keyword`

*/

// simple example of generator

function* myGenerator() {
    yield 1
    yield 2
    yield 3
}

const gen = myGenerator()
console.log("Using while loop...");
let result = gen.next()
while (!result.done) {
    console.log(result.value);
    result = gen.next()
}

// another way to loop over


const results = myGenerator()

console.log("Using for...of loop");
for (const value of results) {
    console.log(value);
}



// In the above code we manually implemented next() function by ourselves but it can be easily done using generators. 
// For example


const users = {
    currEmployee: 0,
    records: [{ name: "max", age: 24 }, { name: "smith", age: 35 }],
    [Symbol.iterator]: function* getEmployeeRecord() {
        while (this.currEmployee < this.records.length) {
            yield this.records[this.currEmployee],
                this.currEmployee++
        }
    }
}

console.log('Using generator function in Symbol.Iterator');
for (const user of users) {
    console.log(user);
}
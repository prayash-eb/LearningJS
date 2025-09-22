
// reduce method -> Purpose is to reduce an array to a single required value.
// for example calculating the sum of numbers inside an array.

const arr = [4, 2, 2, 45, 12, 11, 56]

// reduce can be used for different purposes as well.

/*
1. Finding the sum of elements in an array (the most common one)
*/
const sum = arr.reduce((prev, curr, currIndex, arr) => {
    return prev + curr
}, 0)
console.log("Sum:", sum);

/*
2. Find the max value inside an array
if curr value greater then prev then max is curr and comparing all the elements pair like this to get max
*/
const max = arr.reduce((prev, curr) => curr > prev ? curr : prev, arr[0])
console.log("Max:", max);


/*
3. We can also flatten an nested array into a non-nested array
[[1,2],[3,4],[5,6]]
*/

const nestedArray = [[1, 2], [3, 4], [5, 6]]
const flattenArray = nestedArray.reduce((prev, curr) => prev.concat(curr), [])
console.log("FlattenArray:", flattenArray);

/*
4. It can also be used to count the occurences of items
["ram","shyam","ram","hari","hari","sita","shyam","hari"]
*/

const nameArray = ["ram", "shyam", "ram", "hari", "hari", "sita", "shyam", "hari"]

const counts = nameArray.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
}, {})

console.log("NameCount:", counts);

/**
It can also be used to group objects by property, for example counting the number of people with same age.
 */

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 31 },
    { name: "Prayash", age: 30 }
];

const countPersonWithSameAge = people.reduce((prev, curr) => {
    const currAge = curr.age
    prev[currAge] = (prev[currAge] || 0) + 1
    return prev
}, {})
console.log("Group By Age Count:", countPersonWithSameAge);


/* 
It can also be used to remove duplicates from an array
*/

const arrayWithDuplicates = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 8, 1, 6, 9]

const duplicatesRemovedArray = arrayWithDuplicates.reduce((prev, curr) => {
    if (!prev.includes(curr)) prev.push(curr)
    return prev
}, [])

console.log("DuplicatesRemovedArray:", duplicatesRemovedArray);
const arr1 = [1, 2, 2, 3, 3,]

const arr2 = new Array(...arr1)
// creating any arry of 10 elements with each having 1
const arr3 = new Array(10).fill(1)

// console.log(arr2);

// takes an iterable
const newarr = Array.from(arr1, (x) => x * 2)
const strarr = Array.from("PrayashMishra", (item) => item.charCodeAt())
// console.log(strarr);
// console.log(newarr);

// splice method
// used to delete the elements from the array from index to up to how many count
const myarr = [1, 2, 2, 3, 3, 4, 5, 6]
// start with index 1 and remove 5 elements from index 1
console.log(myarr.splice(1, 3))
console.log(myarr);

console.log(myarr.splice(1, 3, "5", "6", "7"))

// indexOf, lastIndexOf, find, findIndex, includes, findLast, findLastIndex, 

const arr4 = [4, 1, 6, 7, 2, 3, 1, 6]

// return the first index of the found element
console.log(arr4.indexOf(6))
// return the last index of the found element
console.log(arr4.lastIndexOf(6))


// find method, takes a callback function as an argument

const personData = [{ name: "Prayash", address: "ktm" }, { name: "Ram", address: "Chitwan" }]

// here we work with the actual reference and doesnot create a copy
const isPrayashObject = personData.find((person, index, persons) => {
    return person.name.toLowerCase()==="prayash"
})
console.log(isPrayashObject);

const isPrayashIndex = personData.findIndex((person, index, persons) => {
    return person.name.toLowerCase()==="ram"
})
console.log(isPrayashIndex);

// we also do have includes method which returns boolean if the value exists inside an array

const arr5 = ["prayash",'mishra','is']
console.log(arr5.includes("prayash"));
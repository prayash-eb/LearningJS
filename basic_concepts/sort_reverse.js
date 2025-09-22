const arr = [55, 2, 50, 1, 34, 90, 43]

//  this will change the original array & sort in ascending order by default
// console.log(arr.sort())
//  reversing the sorted array
// console.log(arr.reverse())
//  the original array is changed
// console.log(arr);


// We also do have a method that can be used to sort and reverse without changing original array 

const arr2 = [45, 23, 67, 43, 89, 12]

const sortedArray = arr2.toSorted()
const sortedReversedArray = sortedArray.toReversed()
console.log(sortedArray,"\n",sortedReversedArray);
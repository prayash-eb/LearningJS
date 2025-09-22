const map = new Map()

map.set("name", "Prayash")
map.set("address", "Chitwan")

// clears/empties the map
// map.clear()
// delete a key-value pair based on the key
// map.delete("name")


// Map Challange
const sentence = "i love playing football"

function countWordFrequency(sentence) {
    const result = new Map()
    for (const char of sentence) {
        result[char] = (result[char] || 0) + 1
    }
    return result
}

// console.log(countWordFrequency(sentence))

function removeDuplicates(arr) {
    return new Set([...arr])
}
const duplicatesArray = [1, 2, 2, 3, 4, 4, 4, 2, 3, 3]
console.log(removeDuplicates(duplicatesArray));



function firstNonRepeatingCharacter(sentence) {
    const map = new Map()
    for (const char of sentence) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (const char of sentence) {
        if (map.get(char) == 1) return char
    }
    return null

}

console.log("First Non Repeating Character:", firstNonRepeatingCharacter(sentence))


// 

function commonElementsBetweenArrays(arr1, arr2) {
    const l1 = arr1.length
    const l2 = arr2.length
    let set;
    if (l1 > l2) {
        set = new Set(arr1)
    } else {
        set = new Set(arr2)
    }
    return l1 > l2 ? arr2.filter((num) => set.has(num)) : arr1.filter((num) => set.has(num))
}

console.log("Intersection of Two Arrays:", commonElementsBetweenArrays([1, 2, 3], [2, 3, 4, 5]))



const words = ["ant", "tan", "pan", "nap", "eat", "ate", "tea", "she", "hes", "ink", "kin", "nik"]

// we first need to make key (by sorting)

function anagramGrouping(arr) {
    const anagram = new Map()
    for (const word of words) {
        let sortedWord = word.split("").sort().join("")
        if (anagram.has(sortedWord)) {
            anagram.get(sortedWord).push(word)
        }
        else {
            anagram.set(sortedWord, [word])
        }
    }
    console.log("Using naive approach:", anagram);


    // using reduce method
    const reduceResult = arr.reduce((prev, curr) => {
        const sorted = curr.split("").sort().join("")
        if (prev.has(sorted)) {
            prev.get(sorted).push(curr)
        } else {
            prev.set(sorted, [curr])
        }
        return prev
    }, new Map())

    console.log("Using reduce approach:", reduceResult);

}

anagramGrouping(words)



// Set related
const newset = new Set([1,1,3,4,5,3,2,3,6,7,8,1])

for(const [key,value] of newset.entries()){
    console.log(key,value);
}
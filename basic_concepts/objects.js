/*
Basics of Javascript Objects
*/
const person = {
    name: "prayash",
    age: 25,
    address: {
        area: "Kalanki",
        street: "Orchid Tol",
        houseNo: "10"
    }
}
// adding a property to the object
// if the property already exists then the value is modified
person.isAdmin = true
console.log(person)

// removing a property from the object
delete person.isAdmin

console.log(person);


// If the property is of type numbers then the key are sorted in ascending order

const testObj = {
    3: 'prayash',
    2: 'ram',
    1: 'hari',
    4: 'shyam'
}
console.log(testObj);

// spread operator
const newObj = {
    fname: "prayash",
    lname: "mishra",
    isAdmin: true,
    isEmailVerified: true,
    posts: {
        1: {
            title: "Javascript",
            hour: 10
        },
        2: {
            title: "Typescript",
            hour: 20
        }
    }
}

const shallowCopy = { ...newObj }

// as the posts is also an object nested inside a newObj so the its references will be same as this ...(spread method) only create a copy for top level properties

shallowCopy.posts[1].title = "Javascript Advanced Updated"

console.log('Original', newObj);

// this will create even a deep copy for the nested objects, so changing any values for the property will not change the original object
const deepCopy = structuredClone(newObj)


const obj1 = {
    name: "Prayash",
    age:30
}
const obj2 = {
    age:25,
    address: "Chitwan"
}

// this is a new object i.e a copy of obj1 which means merged the {} and obj1
const merged1 = Object.assign({},obj1) 
//  if both obj1 and obj2 have similar keys then the later(second argument obj) will override the value of first one.
const merged2 = Object.assign(obj1, obj2)

console.log(merged2);

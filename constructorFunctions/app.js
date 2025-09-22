console.log("Dom triggered")


// We can create a class from where we can create multiple objects and initiliaze them using constructor

// class Person {

//     constructor(name, age) {
//         this.myname = name
//         this.age = age
//     }

//     greet() {
//         return `Hi my name is ${this.myname}. I am ${this.age} years old `
//     }
// }

// person1 = new Person("prayash", 30)

// console.log(person1.greet())

// while using constructor function it returns a this context if it is invoked using new keyword

/* 
function Person(name, age) {
    this = {} // implicit this object created
    this.name = name
    this.age = age
    this.greet = function () {
        return `Hi my name is ${this.name}. I am ${this.age} years old `
    }
    // returns this when new keyword is used.
    return this
}

Even though we dont see this, it is implicitly handled by JS

*/

function Person(name, age) {
    this.name = name
    this.age = age
    this.greet = function () {
        return `Hi my name is ${this.name}. I am ${this.age} years old `
    }
}

person2 = new Person("prayash", 30)

// console.log(typeof person2);

// console.dir(Person)
// console.log(person2)



// Javascript uses "Prototypical inheritance" rather than class behind the scene. class is just a syntatic sugar


class Employee {
    constructor(name) {
        this.name = name
    }
    getName(){
        console.log(this.name);
    }
}

class Engineer extends Employee {
    constructor(name) {
        super(name)
        this.role = "Engineer"
    }
}


employee = new Employee("prayash")
engineer = new Engineer("ram")
engineer.getName()

console.log(employee)
console.log(engineer)
// class Person {
//     name;
//     age;
//     address;

//     #accountNumber;
//     #ID;

//     constructor(name, age, add, accountNum, ID) {
//         this.#ID = ID
//         this.#accountNumber = accountNum
//         this.name = name
//         this.age = age
//         this.address = add
//     }

//     getPrivateInfo() {
//         return {
//             ID: this.#ID,
//             accNum: this.#accountNumber
//         }
//     }

//     getInfo() {
//         return {
//             name: this.name,
//             address: this.address,
//             age: this.age
//         }
//     }
// }

// person1 = new Person("prayash", 25, "Chitwan", 2321212, "123")
// console.log(person1.getPrivateInfo());

// Example of Implemented Class


class BankAccount {
    owner;
    #balance

    constructor(owner, initialBalance = 0) {
        this.owner = owner
        this.#balance = initialBalance
    }

    get balance() {
        return this.#balance
    }
    set balance(value) {
        this.#balance = value
    }

    deposit(value) {
        this.#balance += value
    }
    withdraw(value) {
        if (this.#balance - value <= 0) {
            console.log('Not enough Balance');
            return
        }
        this.#balance -= value
    }
}

class SavingAccount extends BankAccount {
    #interestRate;
    constructor(owner, initialBalance, interestRate) {
        super(owner, initialBalance) // super keyword is used to call the constructor of the parent class
        this.#interestRate = interestRate
    }
    addInterest() {
        const interest = this.balance * this.#interestRate / 100
        this.deposit(interest)
    }
}


const person1 = new BankAccount("prayash", 500)

person1.deposit(200)
person1.withdraw(400)

console.log(person1.balance)

const person2 = new SavingAccount("ram", 500, 10)

person2.addInterest() // add 10% interest to total Balance
console.log(person2.owner);

console.log(person2.balance)
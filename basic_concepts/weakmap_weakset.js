/*

Map vs WeakMap

1. Map is key-value pair data structure where key can be any data type like (primitives, objects, functions and so on)

2. WeakMap is also a key-value pair data structure where key can be only object type like {name:"Prayash"} and when that object isnot referenced anywhere the value from the WeakMap is automatically garbage-collected.


 */

const _privateData = new WeakMap();

class User {
  constructor(name, password) {
    this.name = name;
    _privateData.set(this, { password }); // store private data
  }

  checkPassword(pwd) {
    return _privateData.get(this).password === pwd;
  }
}

let user1 = new User("Alice", "12345");
console.log(user1.checkPassword("12345")); // true

user1 = null;

//  will throw error
// user1.checkPassword("12345")

// When user1 goes out of scope → WeakMap entry auto-garbage-collected


/*
Set vs WeakSet

1. Set is a data structure of unique values(value can be primitives or objects)
2. WeakSet is a data struture only containing objects. In WeakSet, objects are held weakly meaning if no references to the object exists, they get garbage collected automatically.

*/



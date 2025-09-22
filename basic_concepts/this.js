// in case of non-strict environment or browser env it will refer to window or global or 
// globalThis
// (function foo() {
//     console.log(this)
// })()

// (function strict() {
//         'use strict'
//         console.log(this) // undefined    
// })()


// method invocation, implicit binding

const obj = {
    fname: "prayash",
    lname: "mishra",
    getfullName() {
        return this.fname + ' ' + this.lname
    }
    
}

console.log(obj.getFormattedName())
console.log(obj.getfullName());
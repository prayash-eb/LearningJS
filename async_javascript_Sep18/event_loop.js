

function greet() {
    console.log("Time elapsed",end-start);
    return "Good morning"
}


// this is configured to be run after 1s but as the callstack will be blocked by the synchrous code( loop) running in the callstack. The `greet` function when passed as a callback in setTimeout will be pushed to the callback queue which will be later pushed to the JS callstack by the event loop only after the call stack becomes empty.
// here event loop is responsible for checking if the call stack is empty and only then it pushes the function from the callback queue.

setTimeout(greet, 1000)
let start = new Date(Date.now())

let sum = 0
for (let i = 0; i < 10000000000; i++) {
    sum = i
}
let end = new Date(Date.now())

console.log("Loop finished")
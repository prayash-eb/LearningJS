/* 
When we have multiple callbacks nested over each other, it will become very cumbersome and difficult to handle and it is also known as callback hell. So, to resolve this in a better way, we have the concept of promises.

It is a built in object that represents the eventual result(success or failure) of an asynchronous operation

Promise can be in 3 states.
1. Pending -> The async task is still running.
2. Fulfilled -> The task completed successfully (resolved).
3. Rejected -> The task failed (error occurred).

*/

// ways to create a promise


// const promise = new Promise((resolve, reject) => {
//     // async task that takes 2s
//     setTimeout(() => {
//         resolve("Data Fetched");
//     }, 2000)
// })


// promise.then((data) => console.log(data));


function readFileAsync() {
    const promise = new Promise((resolve, reject) => {
        //  these operations can be done in node projects
        // fs.readFile(path,'utf-8',(err, data) => {
        //     if (err) reject(err)
        //     else resolve(data)
        // })
    })
    return promise
}
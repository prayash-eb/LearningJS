/* In JS there are multiple methods to work with HTTP request. 
1. XMLHttpRequest()
2. Fetch
These are browser built in functionalities which helps to make network calls to different services.

*/

// using XMLHttpRequest

// define a XMLHttpRequest objects
// const xhr = new XMLHttpRequest()

//xhr.open takes two arguments (method,url)
// xhr.open('GET', "https://jsonplaceholder.typicode.com/todos/")

// xhr.send will send a network call, now we need to setup a listener so that we know what to do when a data is loaded.
// xhr.response should be serialized in a format that can be used by our js program. as the response is in a json format, we can parse it to the JS object using JSON.parse(xhr.response)
// xhr.onload = function () {
// console.log((xhr.response));
// console.log((JSON.parse(xhr.response)));
// }
// xhr.send()


// as we know as this is a asynchrounus operation we can handle it using a promise and make it in a better resuable function

function sendHTTPRequest(method, URL, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, URL)


        xhr.onload = function () {
            resolve(JSON.parse(xhr.response))
        }
        xhr.onerror = function () {
            reject("Error occured")
        }
        xhr.send(JSON.stringify(data))

    })
    return promise
}


async function fetchPosts() {
    try {
        const responseData = await sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts")
        // handle responseData as we like in the client side.
        console.log(responseData);
    } catch (error) {
        console.log(error);
    }
}

fetchPosts()




async function creatPOST(title, content) {
    const postData = {
        userId: Math.floor(Math.random() * 1000),
        title,
        content
    }
    const response = await sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", postData)
    console.log(response);
}

creatPOST("Testing","This is a content for testing")
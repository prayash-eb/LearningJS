/* In browser we can store data in different ways 
1. LocalStorage -> simple key:value store
2. SessionStorage -> simple key:value store
3. Cookies -> simple key:value store with feature for addtional config such as maxAge, path, secure,etc
4. IndexDB -> relatively complex, sophhisticated client-side database
*/

const userId = "u123";
// ways to set item to the storage
localStorage.setItem('uid_local', userId)
sessionStorage.setItem('uid_session', userId)

// ways to get item from the storage

localStorage.getItem('uid') // u123
sessionStorage.getItem('uid') //u123


// ways to work with indexDB
// ("Name",versionNumber)
const dbRequest = indexedDB.open("DummyDataIndex", 1)



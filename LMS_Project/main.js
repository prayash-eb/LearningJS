
// This is a simple Library Management System Project built after completeing classes, OOP module to practise it.


import { createInterface } from 'readline'

class Library {
    constructor(libraryName) {
        this.libraryName = libraryName
        this.books = []
        this.members = new Map()
    }

    addBook(memberId, book) {
        const member = this.members.get(memberId)
        if (member && member.isAdmin) {
            console.log(`Adding new book by admin with id:${memberId}. Book Name: ${book.title}`);
            this.books.push(book)
        } else {
            console.log("Admin privileges required")
        }
    }

    removeBook(memberId, bookId) {
        const member = this.members.get(memberId)
        if (!member || !member.isAdmin) {
            console.log("Admin only can remove books")
            return
        }
        const bookExist = this.books.find(book => book.id === bookId)
        if (!bookExist) {
            console.log("Book Not Found")
            return
        }
        this.books = this.books.filter(book => book.id !== bookId)
        console.log(`Book with ID ${bookId} removed.`)
    }

    addMember(id, name, isAdmin = false) {
        const member = new Member(id, name, isAdmin)
        this.members.set(id, member)
        return member
    }

    removeMember(memberId) {
        if (this.members.has(memberId)) {
            this.members.delete(memberId)
        } else {
            console.log("Member not found")
        }
    }

    getMembers() {
        return Array.from(this.members.values())
    }

    getBooks() {
        return this.books.map(book => book.getBookInfo())
    }

    borrowBook(memberId, bookId) {
        const member = this.members.get(memberId)
        const book = this.books.find(b => b.id === bookId)
        if (!member) return console.log("Member not found")
        if (!book) return console.log("Book not found")
        member.borrowBook(book)
    }

    returnBook(memberId, bookId) {
        const member = this.members.get(memberId)
        const book = this.books.find(b => b.id === bookId)
        if (!member) return console.log("Member not found")
        if (!book) return console.log("Book not found")
        member.returnBook(book)
    }
}

class Book {
    constructor(id, title, author, isAvailable = true) {
        this.id = id
        this.title = title
        this.author = author
        this.isAvailable = isAvailable
    }

    getBookInfo() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            isAvailable: this.isAvailable
        }
    }
}

class Member {
    constructor(id, name, isAdmin = false) {
        this.id = id
        this.name = name
        this.isAdmin = isAdmin
        this.borrowedBooks = []
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false
            this.borrowedBooks.push(book)
            console.log(`${this.name} borrowed ${book.title}`)
        } else {
            console.log("Book already borrowed")
        }
    }

    returnBook(book) {
        const bookIdx = this.borrowedBooks.findIndex(b => b.id === book.id)
        if (bookIdx !== -1) {
            book.isAvailable = true
            this.borrowedBooks.splice(bookIdx, 1)
            console.log(`${this.name} returned ${book.title}`)
        } else {
            console.log("This book was not borrowed by the member")
        }
    }
}

//  ---------------- CLI ----------------
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

const library = new Library("BooksLibrary")

// Default admin
const admin = library.addMember(1, "Admin", true)

function showMenu() {
    console.log(`
--- Library CLI ---
1. Add Member
2. Add Book
3. Remove Book
4. List Members
5. List Books
6. Borrow Book
7. Return Book
0. Exit
`)
    rl.question("Choose option: ", handleInput)
}

function handleInput(option) {
    switch (option) {
        case "1":
            rl.question("Enter member name: ", name => {
                const id = Date.now()
                library.addMember(id, name, false)
                console.log(`Member ${name} added with ID ${id}`)
                showMenu()
            })
            break
        case "2":
            rl.question("Enter book title: ", title => {
                rl.question("Enter author: ", author => {
                    const id = Date.now()
                    library.addBook(admin.id, new Book(id, title, author))
                    console.log(`Book added with id: ${id}`);
                    showMenu()
                })
            })
            break
        case "3":
            rl.question("Enter book ID to remove: ", id => {
                library.removeBook(admin.id, parseInt(id))
                showMenu()
            })
            break
        case "4":
            console.log(library.getMembers())
            showMenu()
            break
        case "5":
            console.log(library.getBooks())
            showMenu()
            break
        case "6":
            rl.question("Enter member ID: ", memberId => {
                rl.question("Enter book ID: ", bookId => {
                    library.borrowBook(parseInt(memberId), parseInt(bookId))
                    showMenu()
                })
            })
            break
        case "7":
            rl.question("Enter member ID: ", memberId => {
                rl.question("Enter book ID: ", bookId => {
                    library.returnBook(parseInt(memberId), parseInt(bookId))
                    showMenu()
                })
            })
            break
        case "0":
            rl.close()
            break
        default:
            console.log("Invalid option")
            showMenu()
    }
}

showMenu()

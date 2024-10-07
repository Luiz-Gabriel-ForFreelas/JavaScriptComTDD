class Book {
    constructor(bookName, bookAuthor, bookPublicationYear) {
        this.bookName = bookName,
        this.bookAuthor = bookAuthor,
        this.bookPublicationYear = bookPublicationYear
    }

    ShowDescription() {
        return `O livro ${this.bookName}, foi escrito em ${this.bookPublicationYear} por ${this.bookAuthor}`
    }
}

class Library {
    constructor(arrayBooks = Array()) {
        this.arrayBooks = arrayBooks
    }

    ShowBooks() {
        return this.arrayBooks
    }

    AddBook(book) {
        this.arrayBooks.push(book)
    }

    FindByAuthor(author) {
        return this.arrayBooks.filter(book => book.bookAuthor === author)
    }
}

const book1 = new Book("Livro1", "Autor1", "Data1")
const book2 = new Book("Livro2", "Autor2", "Data2")

const library = new Library([book1, book2])

const arrayBooks = library.ShowBooks()

arrayBooks.forEach(book => {
    console.log(book.ShowDescription())
})

//export default Book
//export {Library}
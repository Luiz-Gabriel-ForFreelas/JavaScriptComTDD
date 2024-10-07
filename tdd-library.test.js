import Book from "./tdd-library.js";

import { Library } from "./tdd-library.js";

describe('Test block', () => {
    it('Book class / ShowDescription function / test', () => {
        const book1 = new Book("Rei Persa", "Luiz", "2024")
        const description = book1.ShowDescription()
        expect(description).toEqual('O livro Rei Persa, foi escrito em 2024 por Luiz')
    })

    it('Library class / ShoowBooks function / test', () => {
        const library = new Library(Array("livro1", "livro2"))
        const array = library.ShowBooks()
        expect(array).toEqual(Array("livro1", "livro2"))
    })

    it('Library class / AddBook function / test', () => {
        const library = new Library(Array("livro1", "livro2"))
        const NewBook = new Book("Eu penso", "Luiz", "2024")
        library.AddBook(NewBook.bookName)
        const array = library.ShowBooks()
        expect(array).toEqual(Array("livro1", "livro2", "Eu penso"))
    })

    it('Library class / FindByAuthor function / test', () => {
        const book1 = new Book("Livro1", "Autor1", "Ano2")
        const book2 = new Book("Livro2", "Autor2", "Ano2")
        const library = new Library([book1, book2])
        const findedBook = library.FindByAuthor("Autor2")
        findedBook.forEach(function(book){
            expect(book.ShowDescription()).toEqual("O livro Livro2, foi escrito em Ano2 por Autor2")
        })
    })
})

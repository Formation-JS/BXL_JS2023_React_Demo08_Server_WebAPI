import { BookDTO, BookListDTO } from '../dto/book.dto.js';
import bookData from './../data/books.json' assert {  type: 'json' };

const bookService = {

    getById: async (id) => {
        const book = bookData.data.find(b => b.id === id);
        return !!book ? new BookDTO(book) : null;
    },

    getAll: async() => {
        const books = bookData.data.map(b => new BookListDTO(b));
        return books;
    },

    add: async ({name, desc, price, categorie}) => {
        bookData.lastId++;

        const bookAdded = {
            id: bookData.lastId, name, desc, price, categorie
        }
        bookData.data.push(bookAdded);

        return bookAdded;
    },
}

export default bookService;
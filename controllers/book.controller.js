import bookService from '../services/book.service.js';

const bookController = {

    fetchById: async (req, res) => {
        const bookId = parseInt(req.params.bookId);

        const book = await bookService.getById(bookId);

        if(!book) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(book);
    },
    
    fetchAll: async (req, res) => {
        const books = await bookService.getAll();
        res.status(200).json(books);
    },
    
    insert: async (req, res) => {
        const bookRequest = req.body;
        const bookAdded = await bookService.add(bookRequest);

        res.status(201).location(`/book/${bookAdded.id}`).json(bookAdded);
    },
}

export default bookController;
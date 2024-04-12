import { Router } from 'express';
import bookController from '../controllers/book.controller.js';
import { authorizeMiddleware } from '../middlewares/authentification.middleware.js';

const bookRouter = Router();

bookRouter.route('/')
    .get(authorizeMiddleware(), bookController.fetchAll)
    .post(authorizeMiddleware('admin'), bookController.insert)
    .all((req, res) => res.sendStatus(405));

bookRouter.route('/:bookId')
    .get(authorizeMiddleware(), bookController.fetchById)
    .all((req, res) => res.sendStatus(405));

export default bookRouter;

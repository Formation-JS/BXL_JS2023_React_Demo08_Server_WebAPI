import { Router } from 'express';
import authRouter from './auth.router.js';
import bookRouter from './book.router.js';

const mainRouter = Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/book', bookRouter);

export default mainRouter;
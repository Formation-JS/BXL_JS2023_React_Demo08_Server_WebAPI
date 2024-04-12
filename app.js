import express from 'express';
import 'express-async-error';
import cors from 'cors';
import mainRouter from './routes/index.js';
import { authTokenMiddleware } from './middlewares/authentification.middleware.js';

const { PORT, NODE_ENV } = process.env;

// Web API
const app = express();

// - Middleware
app.use(cors());
app.use(express.json());
app.use(authTokenMiddleware());

// - Routes
app.use('/api', mainRouter);

// - Start
app.listen(PORT, () => {
    console.log(`Web API is running on port ${PORT} (Env: ${NODE_ENV})`);
})
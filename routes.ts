import express from 'express';

import {
  getBooks,
} from './controllers/books';

const router = express.Router();

router.get('/books', getBooks);

export {router as default};

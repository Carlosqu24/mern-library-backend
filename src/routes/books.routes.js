const express = require('express');
const router = express.Router();

const { getBooks, saveBook, editBook, deleteBook } = require('../controllers/books.controllers');

router.get('/', getBooks);
router.post('/new-book', saveBook)
router.put('/edit/:id', editBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;
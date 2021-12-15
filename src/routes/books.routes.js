const express = require('express');
const router = express.Router();

const { getBooks, saveBook, editBook, deleteBook } = require('../controllers/books.controllers');
const { verifyToken } = require("../middlewares/index")

router.get('/', getBooks);
router.post('/new-book', verifyToken, saveBook)
router.put('/edit/:id', verifyToken, editBook);
router.delete('/delete/:id', verifyToken, deleteBook);

module.exports = router;
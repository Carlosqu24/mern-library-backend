const express = require('express');
const router = express.Router();

const { getBooks, saveBook, editBook, deleteBook } = require('../controllers/books.controllers');
const { verifyToken, isModerator, isAdmin } = require("../middlewares/index")

router.get('/', getBooks);
router.post('/new-book', [ verifyToken, isModerator], saveBook)
router.put('/edit/:id', [verifyToken, isAdmin], editBook);
router.delete('/delete/:id', [verifyToken, isAdmin], deleteBook);

module.exports = router;
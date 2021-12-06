const booksController = {};

const Book = require('../models/Book');

booksController.getBooks = async (req, res) => {
      const books = await Book.find().sort({ date: 'desc' }).lean()

      res.json(books);
};

booksController.saveBook = async (req, res) => {
      const { name, description, author, gender, imageURL } = req.body;

      const newBook = new Book({ name, description, author, gender, imageURL });
      const savedBook = await newBook.save();

      res.json(savedBook);
};

booksController.editBook = async (req, res) => {
      const { name, description, author, gender, imageURL } = req.body;

      const updatedBook = await Book.findByIdAndUpdate(req.params.id, { name, description, author, gender, imageURL });

      res.json(updatedBook)
};

booksController.deleteBook = async (req, res) => {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);

      res.json(deletedBook)
};

module.exports = booksController;
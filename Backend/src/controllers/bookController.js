const Book = require('../models/book.model');


const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        console.error('Error fetching books:', err); 
        res.status(500).json({ message: 'Server error' }); 
    }
};

const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' }); 
        }
        res.status(200).json(book);
    } catch (err) {
        console.error('Error fetching book by ID:', err); 
        res.status(500).json({ message: 'Server error' }); 
    }
};

const addBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        console.error('Error adding book:', err.message);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook
};

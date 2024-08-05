const Book = require('../models/book.model');


const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        console.error('Error fetching books:', err); // Log the error for debugging
        res.status(500).json({ message: 'Server error' }); // Send a more generic error message
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

module.exports = {
    getAllBooks,
    getBookById
};

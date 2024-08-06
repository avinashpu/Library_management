const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    isbn: { type: String },
    pageCount: { type: Number },
    publishedDate: { type: Date },
    thumbnailUrl: { type: String},
    shortDescription: { type: String },
    longDescription: { type: String },
    status: { type: String, enum: ['PUBLISH', 'UNPUBLISH'] },
    authors: [{ type: String, required: true }],
    categories: [{ type: String}]
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

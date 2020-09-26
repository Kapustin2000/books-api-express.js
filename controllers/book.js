var Book = require('../models/Book');

exports.index = function (req, res, next) {
     try {
         const books = Book.find();

         res.json(books);

     } catch (err) {
         res.json({message: err});
     }
};

exports.show = function async (req, res, next) {
    console.log(res);
};

exports.store = function async (req, res, next) {
    console.log("here");
    const book = new Book({
        title: res.body.title,
        description: res.body.description
    })

    res.json({message: 123});

    try {
        const savedBook = book.save();
        res.json(savedBook);
    } catch (err) {
        res.json({message: err})
    }
};

exports.update = function async (req, res, next) {
    console.log(res);
};
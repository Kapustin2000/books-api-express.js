var Book = require('../models/Book');

exports.index = async function (req, res, next) {
     try {
         const books = await Book.find();

         res.json(books);

     } catch (err) {
         res.json({message: err});
     }
};

exports.show = async function (req, res, next) {
    const book = await Book.findById(req.params.bookId);

    res.json({book: book});
};

exports.store = function async (req, res, next) {

    const book = new Book({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedBook = book.save();
        res.json(savedBook);
    } catch (err) {
        res.json({message: err})
    }
};

exports.update = async function async (req, res, next) {
    try{
        const bookUpdated = await Book.updateOne(
            {_id : req.params.bookId},
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description
                }
            }
        );

        res.json(bookUpdated);  
    } catch (err) {
       res.json({message: err});
    }
};


exports.delete = async function async (req, res, next) {
    try{
        const bookDeleted= await Book.remove({_id : req.params.bookId});

        res.json(bookDeleted);
    } catch (err) {
        res.json({message: err});
    }
};

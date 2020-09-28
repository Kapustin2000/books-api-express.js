var User = require('../models/User');


exports.auth = function async (req, res, next) {

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const userSaved = user.save();
        res.json(userSaved);
    } catch (err) {
        res.json({message: err})
    }
};

exports.register = function async (req, res, next) {

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
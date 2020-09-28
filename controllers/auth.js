var User = require('../models/User');
const {LoginValidation, RegisterValidation} = require('../validators/auth');
const bcrypt = require('bcryptjs');


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

exports.register = async function (req, res, next) {

    const { error } = RegisterValidation(res.body);
    if(error) return res.status(400).send(error.details[0].message);

    const userExists = await User.findOne({email: req.body.email});
    if(userExists) return res.status(400).send("Email already has been taken");

    const salt = await bcrypt.genSalt(10);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt)
    });

    try {
        const userSaved = await user.save();
        res.json(userSaved);
    } catch (err) {
        res.json({message: err})
    }
};
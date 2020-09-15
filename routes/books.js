var express = require('express');
var router = express.Router();
var controller = require('../controllers/book');

/* GET users listing. */
router.get('/', controller.index);
router.get('/:book_id', controller.index);
router.post('/', controller.store);
router.post('/:book_id', controller.index);


module.exports = router;

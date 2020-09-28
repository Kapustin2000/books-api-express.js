var express = require('express');
var router = express.Router();
var controller = require('../controllers/book');

/* GET users listing. */
router.get('/', controller.index);
router.get('/:bookId', controller.show);
router.post('/', controller.store);
router.patch('/:bookId', controller.update);
router.delete('/:bookId', controller.delete);

module.exports = router;

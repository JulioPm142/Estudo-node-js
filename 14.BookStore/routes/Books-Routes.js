const express = require("express");

const router = express.Router();

const{
    addNewBook,
    getAllBooks,
    getSingleBooks,
    updateBook,
    deleteBook}
    = require('../controllers/BookController');

router.get('/get',getAllBooks);

router.get('/get/:id',getSingleBooks);

router.post('/add',addNewBook);

router.put('/update/:id',updateBook);

router.delete('/delete/:id',deleteBook);

module.exports = router
const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlBook = require('../controllers/book.controller');
const jwtHelper = require('../config/jwtHelper');

//User Route
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/userProfile/:user_id',jwtHelper.verifyJwtToken, ctrlUser.singleUserProfile);

//Book Route
router.post('/postbook',jwtHelper.verifyJwtToken, ctrlBook.postbook);
router.get('/allbooks',jwtHelper.verifyJwtToken, ctrlBook.allbook);
router.get('/allbooks/currentUserBook', jwtHelper.verifyJwtToken, ctrlBook.getAllCurrentUserBook);
router.get('/book/:book_id', jwtHelper.verifyJwtToken, ctrlBook.getSingleBookDetails);
router.post('/allbook/search', jwtHelper.verifyJwtToken, ctrlBook.getSearchBookList);
router.post('/allbook/search/location', jwtHelper.verifyJwtToken, ctrlBook.getBookListLocation);
router.delete('/book/:ID',jwtHelper.verifyJwtToken, ctrlBook.deleteBook);

module.exports = router;

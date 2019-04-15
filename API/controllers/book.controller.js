const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Book = mongoose.model('Book');

module.exports.postbook = (req, res, next) => {
    //res.send(req.body);
    var book = new Book();
    book.user_id = req._id;
    book.name = req.body.name;
    book.author = req.body.author;
    book.edition = req.body.edition;
    book.zip = req.body.zip;
    book.location = req.body.location;
    book.front_photo = req.body.front_photo;
    book.price = req.body.price;
    book.price_type = req.body.price_type;
    book.back_photo = req.body.back_photo;
    book.uploaded_at = Date.now();
    book.landmark = req.body.landmark;
    book.status = 'public';
    book.lat = req.body.lat;
    book.log = req.body.log;
    book.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
        return next(err);
    });
}

module.exports.allbook = (req, res, next) =>{
    Book.find({}, function(err, docs){
        if(err){
            res.send("Something Went Wrong");
        }
        else{
            return res.status(200).json({ status: true, docs });
        }
    });
}

module.exports.getAllCurrentUserBook =(req, res, next) =>{
    Book.find({'user_id':req._id}, function(err, docs){
        if(err){
            res.send("Something Went Wrong");
        }
        else{
            return res.status(200).json({status: true, docs });
        }
    });
}

module.exports.getSingleBookDetails = (req, res, next) =>{
    Book.findOne({'_id':req.params.book_id}, function(err, docs){
        if(err){
            res.send("Something Went Wrongs");
        }
        else{
            return res.status(200).json({status: true, docs});
        }
    });
}

module.exports.getSearchBookList = (req, res, next) => {
    
    var query = {'name': new RegExp(req.body.name, 'i'),
                 'location': new RegExp(req.body.location, 'i'),
                 'landmark': new RegExp(req.body.landmark, 'i')};

    Book.find( query, function(err, docs){
        if(err){
            res.send("Something Went Worng");
        }
        else{
            return res.status(200).json({status: true, docs});
        }
    });
    
}

module.exports.getBookListLocation = (req, res, next) => {
    var latitude = req.body.lat;
    var longitude = req.body.log;
    Book.find({'lat': {$gte:latitude-1, $lte:latitude+1}, 'log': {$gte:longitude-1, $lte:longitude+1} }, function(err, docs){
        if(err){
            res.send("Something Went Wrong");
        }
        else{
            return res.status(200).json({status: true, docs });
        }
    });
}

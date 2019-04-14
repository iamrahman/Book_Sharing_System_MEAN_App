const mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    user_id: {
        type: String,
        unique: false
    },
    name: {
        type: String,
        required: 'Book name can\'t be empty',
        unique: false
    },
    author: {
        type: String,
        required: 'Author name can\'t be empty',
        unique: false
    },
    edition: {
        type: Number,
        required: 'Edition can\'t be empty',
        unique: false
    },
    price: {
        type: Number,
        required: 'Price can\'t be empty'
    },
    price_type: {
        type: String,
        required: 'Price Type can\'t be empty',
        unique: false
    },
    location: {
        type: String,
        required: 'Location can\'t be empty',
        minlength: [2, 'Location must be atleast 2 character long']
    },
    zip: {
        type: Number,
        required: 'ZIP code can\'t be empty'
    },
    front_photo: {
        type: String,
        required: 'Front Photo can\'t be empty'
    },
    back_photo: {
        type: String
    },
    status: {
        type:String,
        required:'Status is required.',
    },
    uploaded_at:{
        type: Date,
        required: true
    },
    landmark:{
        type: String,
        required: false
    },
    log:{
        type: String,
    },
    lat:{
        type: String,
    }
    
});




mongoose.model('Book', bookSchema);
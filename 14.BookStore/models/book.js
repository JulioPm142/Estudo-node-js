const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    Title:{
        type : String,
        required : [true,'Book Title is required'],
        trim : true,
        maxLenght : [100, 'Book title cant be more than 100 charactes']
    },
    Author:{
        type : String,
        required : [true,'Book Autor is required'],
        trim : true,
    },
    Year:{
        type : Number,
        required : true [true, 'Publication year must be added'],
        min : [1000,'Year must be at least 1000'],
        max : [new Date().getFullYear(), 'No future books are allowed']
    },
    CreatedAt:{
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('book',bookSchema)


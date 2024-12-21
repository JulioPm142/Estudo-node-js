
const Book = require('../models/book')

const addNewBook = async (req, res) => {
    try {
        const NewBookFormatdata = req.body;
        const newlyCreatedBook = await Book.create(NewBookFormatdata);
        if (newlyCreatedBook) {
            res.status(201).json({
                sucess: true,
                message: 'Book added',
                data: newlyCreatedBook
            })
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            sucess: false,
            message: "something went wrong!,try again later"
        })
    }

}

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({});
        if (allBooks?.length > 0) {
            res.status(200).json({
                sucess: true,
                message: 'List of books fetched sucessfully',
                data: allBooks
            })
        } else {
            res.status(404).json({
                sucess: false,
                message: 'no books found'
            })
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            sucess: false,
            message: "something went wrong!,try again later"
        })
    }

}

const getSingleBooks = async (req, res) => {
    try {
        const getCurrentBookId = req.params.id;
        const bookDetailsById = await Book.findById(getCurrentBookId);

        if (!bookDetailsById) {
            return res.status(404).json({
                sucess: false,
                message: "this book was not found"
            })
        }
        res.status(200).json({
            sucess: true,
            data: bookDetailsById
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            sucess: false,
            message: "something went wrong!,try again later"
        })
    }
}

const updateBook = async (req, res) => {
    try{
        const UpdatedBookFormData = req.body;
        const getCurrentBookId = req.params.id;
        const updateBook = await Book.findByIdAndUpdate(
            getCurrentBookId,
            UpdatedBookFormData,
            {
                new : true,
            }
        )

        if(!updateBook){
            res.status(404).json({
                sucess:false,
                message:'Book not found with id'
            })
        }
        res.status(200).json({
            sucess:true,
            message:"book update",
            data : updateBook
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            sucess: false,
            message: "something went wrong!,try again later"
        })
    }
}

const deleteBook = async (req, res) => {
    try{
        const getCurrentBookId= req.params.id;
        const deleteBook = await Book.findByIdAndDelete(getCurrentBookId)

        if(!getCurrentBookId){
            res.status(404).json({
                sucess:false,
                message:'Book not found with id'
            })
        }
        res.status(200).json({
            sucess: true,
            message:'Book deleted'
        })

    }catch(e){
        console.log(e)
        res.status(500).json({
            sucess: false,
            message: "something went wrong!,try again later"
        })
    }
}

module.exports = { addNewBook, getAllBooks, getSingleBooks, updateBook, deleteBook }
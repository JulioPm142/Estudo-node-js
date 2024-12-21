const express = require("express")
const app = express()

app.use(express.json())

let books=[
    {
        id:1,
        title:'title 1'
    },
    {
        id:2,
        title:'title 2'
    }
];

app.get("/",(req,res)=>{
    res.json({
        message:'welcome to bookStore api'
    })
})

app.get("/get",(req,res)=>{
    res.json(books)
});


app.get('/get/:id',(req,res)=>{
    const book = books.find(item=> item.id == req.params.id);
    if(book){
        res.status(200).json(book)
    }else{
        res.status(404).json({
            message:'book not found '
        })
    }
})

app.post('/add', (req,res)=>{
    const newBook={
        id : books.length + 1,
        title : `Title ${books.length + 1}` 
    }

    books.push(newBook)
    res.status(200).json(newBook)
})


app.put('/update/:id',(req,res)=>{
    const findCurrentBook = books.find(bookItem=>bookItem.id == req.params.id)
    if(findCurrentBook){
        findCurrentBook.title = req.body.title || findCurrentBook.title

        res.status(200,{
            message : `book with id: ${req.params.id} was updated successfully`,
            data:findCurrentBook
        })
    }else{
        res.status(404,{
            message : 'book not found'
        })
    }
})

app.delete('/delete/:id', (req,res)=>{
    const findIndexOfBook = books.findIndex(item=> item.id == req.params.id)
    if(findIndexOfBook !== -1 ){
        const deleteBooks = books.splice(findIndexOfBook,1);
        res.status(200).json({
            message : 'Book deleted successfully',
            data : deleteBooks
        })
    }else{
        res.status(404,{
            message : 'book not found'
        })
    }
})







const port = 3000;
app.listen(port,()=>{
    console.log('server is running on port: ', port)
});

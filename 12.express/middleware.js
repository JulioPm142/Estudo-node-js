const express = require('express')
const app = express()

const myMiddleware = (req,res,next)=>{
    console.log('this first middleware will run every request')

    next()
};

app.use(myMiddleware);

app.get('/',(req,res)=>{
    res.send('home page')
})


app.get('/about',(req,res)=>{
    res.send('about page')
})

app.listen(3000,()=>{
    console.log("running on port: 3000")
})
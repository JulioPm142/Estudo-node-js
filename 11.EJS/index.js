const express = require("express")
const path = require("path")

const app = express()

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

const products=[
    {
        id:1,
        title:'item 1'
    },
    {
        id:2,
        title:'item 2'
    },
    {
        id:3,
        title:'item 3'
    }
]

app.get('/',(req,res)=>{
    res.render('home',{title: 'home',products:products })
})

app.get('/about',(req,res)=>{
    res.render('about')
})

const port = 3000

app.listen(port,()=>{
    console.log('server is running')
})
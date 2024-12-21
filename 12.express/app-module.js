const  express = require("express")

const app = express();

app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.send('Home page')
})

app.post("/api/data",(req,res)=>{
    res.json({
        message: 'data recived',
        data:req.body
    })
})

app.use((err,res,req,next)=>{
    console.log(err.stack)
    res.status(500).send("something went wrong")
})
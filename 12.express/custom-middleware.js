const express = require('express')
const app = express()


const requestTimeStampLogger= ((req,res,next)=>{
    const timeStamp = new Date().toISOString()

    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next()
})

app.use(requestTimeStampLogger)


app.get('/',(req,res)=>{
    res.send('home page')
})


app.get('/about',(req,res)=>{
    res.send('about page')
})

app.listen(3000,()=>{
    console.log("running on port: 3000")
})
const  express = require("express")

const app = express();


app.get("/",(req,res)=>{
    res.send("Home page")
})


app.get('/products',(req,res)=>{
    const products =[
        {
            id:1,
            label:"prod 1"
        },
        {
            id:2,
            label:"prod 2"
        },
        {
            id:3,
            label:"prod 3"
        },

    ]
    res.json(products)
})


app.get('/products/:Prodid',(req,res)=>{
    const prodId = parseInt(req.params.Prodid)
    const products =[
        {
            id:1,
            label:"prod 1"
        },
        {
            id:2,
            label:"prod 2"
        },
        {
            id:3,
            label:"prod 3"
        },

    ]
    const getSingleProd = products.find(prod=> prod.id === prodId)

    if(getSingleProd){
        res.json(getSingleProd)
    }else{
        res.status(404).send('product is not found')
    }
})



const port =3000

app.listen(port,()=>{
    console.log("Running on port: ",port)
})
require ('dotenv').config();
express = require("express");
const connectToDB = require("./database/db")
const app = express();
const port = process.env.PORT || 3000;
const bookRoutes = require('./routes/Books-Routes')

connectToDB();

app.use(express.json())
app.use('/api/books',bookRoutes)




app.listen(port,()=>{
    console.log("server is now running on port: ",port )
})


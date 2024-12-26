require('dotenv').config(); 
const express = require('express');
const connectToDb = require("./database/db"); 
const authRoutes = require('./routes/auth-routes');
const homeRoutes = require('./routes/home-routes');
const adminRoutes = require('./routes/admin-routes');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

app.use('/api/auth',authRoutes)
app.use('/api/home',homeRoutes)
app.use('/api/admin',adminRoutes)


connectToDb();

app.listen(port, () => {
    console.log("Running on port", port);
});

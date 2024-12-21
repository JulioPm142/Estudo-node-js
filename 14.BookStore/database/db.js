const mongoose = require('mongoose')

const connectToDB = async()=>{
    try{
        await mongoose.connect(
            'mongodb+srv://-----:-----@cluster0/'
        );
        console.log('mongodb is connected successfully')
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectToDB;

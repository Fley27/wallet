const mongoose = require('mongoose')
const config = require('config')
const db= config.get('mongoUri')

const connectDB = async () => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology: true ,
            useCreateIndex: true
        })
        console.log('MongoDb connected successfully'); 
    } catch (error) {
        console.error(error.message); 
        process.exit(1)
        console.log("Cannot connected to the database because: "+error.message);
    }
}

module.exports= connectDB; 
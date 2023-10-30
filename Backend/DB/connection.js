const mongoose = require("mongoose")
require("dotenv").config();
const connectToMongo = async() => {
try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connection to mongo succesful")
}
catch(error){
    console.log(error)

    process.exit(1);
}
}

module.exports = connectToMongo;
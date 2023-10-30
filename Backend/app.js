const express = require("express")
require("dotenv").config();
var cors = require('cors');


const app = express();
app.use(cors())
app.use(express.json())


//connection db
const connectToMongo = require("./DB/connection")
const authenticateUser = require('./middleware/authentication')

//importing router
const authRouter = require('./routes/auth')
const startupsRouter = require('./routes/startups')
const totalstartupsRouter = require('./routes/totalStartups')
    
//routes

app.use('/api/v1/auth' , authRouter)
app.use('/api/v1/startups' ,totalstartupsRouter) 
app.use('/api/v1/startups/profile' , authenticateUser , startupsRouter) 




const PORT = process.env.PORT || 3000
const start = async() => {
    try {
        await connectToMongo();
        app.listen(PORT)
    console.log(`app is listening on port ${PORT}...`)
    }
catch(error){
    console.log(error)
}
    
}

start()
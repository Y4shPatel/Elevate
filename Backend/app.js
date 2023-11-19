const express = require("express")
require("dotenv").config();
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();
app.use(cors({
    origin : true,
    credentials:true,
}))
app.use(express.json())
app.use(cookieParser());

//connection db
const connectToMongo = require("./DB/connection")


//importing router
const authRouter = require('./routes/auth')
const startupsRouter = require('./routes/startups')
const totalstartupsRouter = require('./routes/totalStartups');
const requireAuth = require("./middleware/requiredAuth");
    
//routes

app.use('/api/v1/auth' , authRouter)
app.use('/api/v1/startups' ,totalstartupsRouter) 
app.use('/api/v1/startups/profile' ,requireAuth, startupsRouter) 




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
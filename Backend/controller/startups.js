// const user = require('../Models/user')
const Startup = require('../Models/startups')
const { StatusCodes } = require('http-status-codes')



const totalStartups = async (req,res) => {
  try{
 // Find the notes
 const startups = await Startup.find();

 // Respond with them
 res.json({ startups });
  }
  catch(err)
  {
    console.log(err)
    res.sendStatus(StatusCodes.BAD_REQUEST)
  }
}


const getallStartups = async (req, res) => {
  try {
      // Access the user ID from req.user
      const userId = req.user._id;

      // Continue with your logic
      const startups = await Startup.find({ createdBy: userId }).sort('createdAt');
      res.status(StatusCodes.OK).json({ startups, count: startups.length });
  } catch (err) {
      console.error(err);
      res.sendStatus(StatusCodes.BAD_REQUEST);
  }
};



const createStartup = async (req, res) => {
    try {
        // Assuming req.user.userId is required, check its presence
      const userId = req.user._id;

        if (!userId) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User ID is missing in the request' });
        }

        req.body.createdBy = userId;
        const startup = await Startup.create(req.body);

        res.status(StatusCodes.CREATED).json({ startup });
    } catch (error) {
        // Handle the error gracefully
        console.error('Error in createStartup:', error);

        // Check for specific errors if needed and respond accordingly
        if (error.name === 'ValidationError') {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Validation error', details: error.message });
        }

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal server error' });
    }
};

const getStartup = async (req, res) => {
  try{
    
    const {
      user: { userId = req.user._id },
      params: { id: startupsId },
    } = req
  
    const startup = await Startup.findOne({
      _id: startupsId,
      createdBy: userId,
    })
    if (!startup) {
        res.status(StatusCodes.NOT_FOUND).json(`no startups with id ${startupsId}` )
    }
    res.status(StatusCodes.OK).json({ startup })
  }catch(err)
  {
    console.log(err)
    res.sendStatus(StatusCodes.BAD_REQUEST)
  }
  }

const upadteStartup = async (req, res) => {
  try{
    const {
        body : {title,description,field,progress,rating,StartedBy,email,phoneNo,address,createdBy},
        user: { userId = req.user._id },
        params: { id: startupsId },
      } = req

      if(title === '' || description === '' || field === '' || progress === ''  || rating === '' || StartedBy === '' || email === '' || phoneNo === '' ||address === '' || createdBy === '')
      {
        res.status(StatusCodes.BAD_REQUEST).json('any fields can not be empty')
      }
        const startup =  await Startup.findByIdAndUpdate({
            _id: startupsId,
            createdBy: userId,
          }, req.body,{new:true,runValidators:true})
      
      if(!startup){
        res.status(StatusCodes.NOT_FOUND).json(`no startups with id ${startupsId}` )
      }
      res.status(StatusCodes.OK).json(startup)
    }
    catch(err)
  {
    console.log(err)
    res.sendStatus(StatusCodes.BAD_REQUEST)
  }
}


const deleteStartup = async (req, res) => {
  try{
  const {
    user: { userId },
    params: { id: startupsId },
  } = req

  const startup = await Startup.findByIdAndRemove({ _id: startupsId,
    createdBy: userId,})

    if(!startup){
      res.status(StatusCodes.NOT_FOUND).json(`no startups with id ${startupsId}` )
    }
    res.status(StatusCodes.OK).send("statup deleted")
  }
  catch(err)
  {
    console.log(err)
    res.sendStatus(StatusCodes.BAD_REQUEST)
  }
}

module.exports = {
        getallStartups, getStartup , createStartup , upadteStartup , deleteStartup , totalStartups
    }
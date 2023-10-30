const startups = require('../Models/startups')
const Startup = require('../Models/startups')
const { StatusCodes } = require('http-status-codes')




const totalStartups = async (req,res) => {
    const startups = await Startup.find().sort('-createdAt')
    res.status(StatusCodes.OK).json({startups})
}

const getallStartups = async (req, res) => {
    const startups = await Startup.find({createdBy: req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({startups, count : startups.length})
}

const createStartup = async (req, res) => {
    req.body.createdBy = req.user.userId
    const startup = await Startup.create(req.body)
    res.status(StatusCodes.CREATED).json( {startup})
}

const getStartup = async (req, res) => {
    const {
      user: { userId },
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
  }

const upadteStartup = async (req, res) => {
    const {
        body : {title,description,field,progress,rating,StartedBy,email,phoneNo,address,createdBy},
        user: { userId },
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


const deleteStartup = async (req, res) => {
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

module.exports = {
        getallStartups, getStartup , createStartup , upadteStartup , deleteStartup , totalStartups
    }
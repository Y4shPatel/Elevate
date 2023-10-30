
//fix the errors 


const mongoose = require('mongoose')

const startupSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, ' pls provide te name of your startup'],
        minlength: 3,
        maxlength: 50,
        unique : true
    },
    
    description: {
        type: String,
        required: [true, 'pls provide proper description of your startup'],
        minlength: 30,
        maxlength: 500,
    },

    field: {
        type: String,
        required: [true, 'pls provide proper field of your startup']
    },

    progress: {
        type: String,
        required: [true, 'pls provide progress of your startup']
    },
    
    StartedBy: {
        type: String,
        required: [true, 'pls provide your name'],
        minlength: 3,
        maxlength: 50,
    },

    email: {
        type: String,
        required: [true, 'pls provide your email'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'please provide valid email',],
        
    },

    phoneNo: {
        type: String,
        required: [true, 'pls provide your contact number']
    },

    address: {
        type: String,
        minlength: 3,
        maxlength: 100,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
      },

})

module.exports = mongoose.model('startups',startupSchema)




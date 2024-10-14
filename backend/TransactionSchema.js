const mongoose = require('mongoose')

const transaction = mongoose.Schema({
    Amount:Number,
    Description: String,
    Date: {
        hours : Number,
        minutes : Number,
        seconds : Number,
        day: Number,
        month: Number,
        year: Number,
        
      },
    Type: Boolean
})


const Transaction = mongoose.model('Transaction',transaction)


module.exports = Transaction
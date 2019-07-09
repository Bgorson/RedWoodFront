const mongoose = require('mongoose')
const Schema= mongoose.Schema;

let Employee = new Schema({
    First_Name:{
        type:String
    },
    Last_Name:{
        type:String
    }
})

module.exports= mongoose.model('employees', Employee)
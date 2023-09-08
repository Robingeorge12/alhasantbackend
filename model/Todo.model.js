// const mongoose = require("mongoose")
const mongoose = require("mongoose")
const TodoAl = mongoose.Schema({

    task:{type:String},
    desc:{type:String},
    id_task:{type:Number},
    current_status:{type:String,default:["Do","Doing","Done"]}

})

const Todo = mongoose.model("todotask",TodoAl)

module.exports = {Todo}  
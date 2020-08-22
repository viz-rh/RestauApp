const mongoose = require('mongoose')
const {Schema} = mongoose
const TaskSchema = new Schema({
    title: { type:String,require:true},
    description:{type:String,require:true}
})

module.exports=mongoose.model('task',TaskSchema)

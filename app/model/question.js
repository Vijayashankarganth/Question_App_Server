const mongoose = require('mongoose')
const User = require('./user')

const Schema = mongoose.Schema

const questionShema = new Schema ({
    data:{
        type:String,
        required:true
    },
    isAnswered:{
        type:Boolean,
        required:true,
        default:false
    },
    likes:[{
        type:Schema.Types.ObjectId
    }],
    userId:{
        type:Schema.Types.ObjectId,
        ref:User,
        required:true
    }
})

const Question = mongoose.model('Question',questionShema)

module.exports = Question
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

const ConfigueDb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/ques-001')
        .then(()=>{
            console.log('db connected')
        })
        .catch((error)=>{
            console.log(error)
        })
}

module.exports = ConfigueDb
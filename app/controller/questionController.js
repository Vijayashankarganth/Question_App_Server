
const Question = require('../model/question')

const questionController = {}

questionController.create = (req,res) =>{
    const {data} = req.body
    const userId = req.params.id
    const body = {data,userId}
    const question = new Question(body)
    question.save()
            .then((question)=>{
                Question.findOne({_id:question._id}).populate('userId')
                    .then((response)=>{
                        res.json(response)
                    })
            })
            .catch((error)=>{
                res.json(error)
            })
}

questionController.show = (req,res) =>{
    Question.find().populate('userId')
             .then((question)=>{
                res.json(question)
             })
}

questionController.update=(req,res)=>{
    const {id,Uid} = req.params
   
    Question.find({_id:id,likes:{$in:[Uid]}})
            .then((response)=>{
                if(response.length === 0){
                    Question.findOneAndUpdate({_id:id},{$push:{likes:Uid}},     
                         {new:true}).populate('userId')
                    .then((response)=>{
                        res.json(response)
                    })
                    .catch((error)=>{
                        res.json(error)
                    }) 
                } 
            })
   
}
module.exports = questionController

const adminKey = process.env.SECRET_KEY
const Question = require('../model/question')

const adminController={}

adminController.login = (req,res) =>{
    const body = req.body
    if(body.admin === adminKey){
        const admintoken = Number(new Date())
        res.json(admintoken)
    }
    else{
        res.json({error:{message:"invalid key"}})
    }

}

adminController.update=(req,res)=>{
    const {id} = req.params
    const action = req.query.action
   
    if(action === 'answered'){
        Question.findOneAndUpdate({_id:id},{isAnswered:true},
            {new:true}).populate('userId')
            .then((response)=>{
                res.json(response)
            })
            .catch((error)=>{
                res.json(error)
            })
    }
   else if(action === 'unAnswered'){
        Question.findOneAndUpdate({_id:id},{isAnswered:false},
            {new:true}).populate('userId')
            .then((response)=>{
                res.json(response)
            })
            .catch((error)=>{
                res.json(error)
            })
    }
}


module.exports = adminController
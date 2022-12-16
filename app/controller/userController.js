const User = require('../model/user')

const userController = {}

userController.create=(req,res)=>{
    const body = req.body
    const  user = new User(body)
    user.save()
        .then((user)=>{
            const token = Number(new Date())
            const {name,createdAt,updatedAt,_id,__v} =user
            const response ={name,createdAt,updatedAt,_id,__v,token}
            res.json(response)
        })
        .catch((error)=>{
            res.json(error)
        })
}

userController.list=(req,res)=>{
    User.find()
        .then((user)=>{
            res.json(user)
        })
        .catch((error)=>{
            res.json(error)
        })
}

userController.detail=(req,res)=>{
    const id = req.params.id
    User.findOne({_id:id})
        .then((user)=>{
            res.json(user)
        })
        .catch((error)=>{
            res.json(error)
        })
}

module.exports = userController
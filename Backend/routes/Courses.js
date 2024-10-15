const router = require("express").Router()
const bodyparser=require('body-parser')
const { Collection } = require("mongoose")
bodyparser.urlencoded({extended:false})


router.post('/Search',async (req,res)=>{
    let coursename=req.body.coursename
    let result=await collection.find({coursename:coursename})
    if(!result){
        res.status(404).send({message:"No course found"})
    }
    res.json({
        message:"Course found",
        data:result
    })

})

module.exports= router
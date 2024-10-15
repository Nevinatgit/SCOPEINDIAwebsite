const router = require("express").Router()
const bodyparser=require('body-parser')
bodyparser.urlencoded({extended:false})
const jwt = require("jsonwebtoken")
const bycrypt = require("bcrypt")
const {transporter}=require("../connect.js")
const { Collectionstudent,CollectionCourse } = require("../connect.js")


router.post('/getProfile',async (req,res)=>{
    console.log(req.body.token)
    const data = jwt.verify(req.body.token, "pass");
    console.log(data)
    let email=data.email
    let result= await Collectionstudent.findOne({email:email})
    console.log(result)
    if(!result){
        res.send({message:"No user found"})
    }else{
    res.json({message:"User Found",
        data:result
    })}
   
})
router.post("/getDetails",async (req,res)=>{
    let name= req.body.name
    let result= await CollectionCourse.findOne({Name:name})
    console.log(result+"Twas here")
    res.json({
        result:result
    })
})
router.get("/getCourse",async (req,res)=>{
    let result= await CollectionCourse.find().toArray()
    
    res.json({
        result:result
    })
})
router.post('/addCourse',async (req,res)=>{
    console.log("This is "+req.body.token)
    const data = jwt.verify(req.body.token, "pass");
    let email=data.email
    let course=req.body.course
    console.log(course,email)
    let result = await Collectionstudent.updateOne({email:email},{$push:{courses:course}})
    console.log(result)
    console.log(course)
    res.json({
        status:true
    }) 
})

router.post('/Course',async (req,res)=>{
    await CollectionCourse.insertOne(req.body)
})

router.post('/removeCourse',async (req,res)=>{
    const data = jwt.verify(req.body.token, "pass");
    let email=data.email
    let course=req.body.name
    const result = await Collectionstudent.updateOne(
        { email: email }, 
        { $pull: { courses: course } } 
      );
    res.json({message:"Removed"})
})

router.post("/searchCourse",async (req,res)=>{
    let query=req.body.query
    const pattern = new RegExp(`^${query}`, 'i')
    let resultSearch=[]
    console.log(query)
    let results=await CollectionCourse.find().toArray()
    results.forEach(result =>{
        if(pattern.test(result.Name)){
            resultSearch.push(result)
        }
    })
    console.log(resultSearch)
    res.json({
        searchResult:resultSearch
    })
})

module.exports= router
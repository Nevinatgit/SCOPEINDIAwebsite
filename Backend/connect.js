
const {MongoClient}= require("mongodb")
const nodemailer =require('nodemailer')
url="mongodb+srv://njlepzaneigk:njlepzaneigk@student.kbu3ywt.mongodb.net/?retryWrites=true&w=majority&appName=student"

let client=new MongoClient(url)
let db= client.db("Studentz")
let Collectionlogin=db.collection("nevin")
let Collectionotp=db.collection("OTP")
let Collectionstudent=db.collection("students")
let CollectionCourse=db.collection("Courses")
let transporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"nevinjose045@gmail.com",
        pass:"oqdrggetbcpudfjy"
    }
})



module.exports={Collectionotp,Collectionlogin,Collectionstudent,CollectionCourse,client,transporter}

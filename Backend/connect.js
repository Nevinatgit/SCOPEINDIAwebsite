
const {MongoClient}= require("mongodb")
const nodemailer =require('nodemailer')
url="mongodb+srv://njlepzaneigk:njlepzaneigk@student.kbu3ywt.mongodb.net/?retryWrites=true&w=majority&appName=student"
require('dotenv').config();
const Email=process.env.Email
const Password=process.env.Password
let client=new MongoClient(url)
let db= client.db("Studentz")
let Collectionlogin=db.collection("nevin")
let Collectionotp=db.collection("OTP")
let Collectionstudent=db.collection("students")
let CollectionCourse=db.collection("Courses")
let transporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:Email,
        pass: Password 
    }
})



module.exports={Collectionotp,Collectionlogin,Collectionstudent,CollectionCourse,client,transporter}

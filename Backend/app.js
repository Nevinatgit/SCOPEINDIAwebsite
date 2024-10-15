const express = require('express')
const app = express()
const login= require('./routes/login.js')
const Courses= require('./routes/Courses.js')
const Student= require('./routes/Student.js')
const {client} = require('./connect.js')
const cors = require("cors")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const path = require('path');
app.use(cors())
app.use("/api/Student",Student)
app.use("/api/login",login)
app.use("/api",Courses)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get("/", (req, res) => {
    res.json({
      status: "success",
      text: "Api is working",
    })
  });


app.listen(8000,async (err)=>{
    if(err) throw err
    await client.connect()
    console.log("Server running")
})
const router = require("express").Router()
const {Form,callDetails, collectionOTP}= require("../Register_model.js")


const jwt = require("jsonwebtoken")
const bycrypt = require("bcrypt")
const {Collectioncourse,Collectionotp,Collectionlogin,transporter}=require("../connect.js")
const { Collectionstudent } = require("../connect.js")



router.post('/signup',async (req,res)=>{
    let email = req.body.email
    let password = req.body.password
    console.log("I was here")
    let mailoptions= {
      from:"nevinjose045@gmail.com",
      to:email,
      subject:"This is a dummy password for login Change it after login",
      html:"<h1>Password: DummyPass</h1>"
  
  }
  transporter.sendMail(mailoptions,(err)=>{
      console.log("Email send")
  })
    if(!email || !password){
        res.status(400).json({
            message:"Invalid Credentials"
        })
    }
    const token = jwt.sign(
        { email: email, password: password },
        "pass",
        { expiresIn: "1d" }
      );
    password= await bycrypt.hash(password,10)
    await Collectionlogin.insertOne({email:email,password:password})
    res.json({
        token:token
    })
})
router.post('/login',async (req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
   
    if(!email || !password){
        res.status(400).json({
            message:"Invalid Credentials"
        })
    }
 
    let result = await Collectionlogin.findOne({email:email})
    console.log(result)
    if(result){
        let auth= await bycrypt.compare(password,result.password)
        console.log("auth"+auth)
        if(auth==false){
            res.json({
                    status:false,
                    message:"Invalid credentials"
                })
            }
            const token = jwt.sign(
                { email: email, password: password },
                "pass",
                { expiresIn: "1d" }
              );
            if(auth){
                res.json({
                    status:true,
                    message:"sucessful",
                    token: token
                })
            }
        }
        else{
            res.status(404).json({
                status:false,
                message:"Invalid Credentials"
            })
        }
  
    

})
const multer = require("multer")
const path = require('path');
const { stat } = require("fs")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); 
    }
  });
  
  const upload = multer({ storage });
  
 
  

 
router.post('/callDetails', async (req,res)=>{
    console.log(req.body)
    let result=await new callDetails(req.body.data).save()
    console.log(result)
    let mailoptions= {
        from:"nevinjose045@gmail.com",
        to:"nevinjose045@gmail.com",
        subject:"This is the otp for password change",
        html:"<h1>A Customer named "+req.body.data.name+ " with Phone number "+req.body.data.Phone+" Wants to Speak</h1>"
    
    }
    transporter.sendMail(mailoptions,(err)=>{
        console.log("Email send")
    }
    )
    res.json({
        status:true
    })
})
router.post('/register', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const data = jwt.verify(req.body.token, "pass");
    console.log(data.email)
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    } 
    const formData = {
      ...req.body,
      imagePath: `/uploads/${req.file.filename}`, 
    };
    formData.email=data.email
    delete formData.token
    console.log(formData)
    try {
      const result = await new Form(formData).save();
      console.log(result);
      res.json({
        message: "Inserted",
        filePath: formData.imagePath,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving form data.');
      
    }
    
  });
  router.post('/edit', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const data = jwt.verify(req.body.token, "pass");
    console.log(data.email)
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    } 
    const formData = {
      ...req.body,
      imagePath: `/uploads/${req.file.filename}`, 
    };
    formData.email=data.email
    delete formData.token
    console.log(formData)
    try {
      const result = await Form.updateOne({email:data.email},{$set:formData})
      console.log(result);
      res.json({
        message: "Inserted",
        filePath: formData.imagePath,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving form data.');
      
    }
    
  });
router.post('/OTP',async (req,res)=>{
    let email= req.body.email
    console.log("sdfsdf"+email)
    let found = await collectionOTP.findOne({ email: email });
    console.log(found)
    if(found){
    const token = await jwt.sign(
        { email: email},
        "pass",
        { expiresIn: "1d" }
      );
    let otp= parseInt(Math.random()*100000)
    console.log("dfgdfg"+otp)
    let mailoptions= {
        from:"nevinjose045@gmail.com",
        to:email,
        subject:"This is the otp for password change",
        html:"<h1>Your otp is"+otp+"</h1>"
    
    }
    Collectionotp.insertOne({email:email,otp:otp})
    transporter.sendMail(mailoptions,(err)=>{
        console.log("Email send")
    }
    )
    res.json({
        status:true,
        token:token
    })
}else{
    res.json({
        status:false
    })
}

})

router.post('/verifyotp',async (req,res)=>{
    let otp=req.body.OTP
    console.log(req.body.token)
    const data = jwt.verify(req.body.token, "pass");
    console.log(data)
    email=data.email
    console.log(email)
    let result =await Collectionotp.findOne({email:email})
    await Collectionotp.deleteOne({email:email})
    console.log(result.otp,otp)
    if(result.otp==otp){
        console.log(result,email)
        res.json({status:true})
    }else{
        res.json({status:false})
    }
})

router.post('/ChangePassword',async (req,res)=>{
    let newpassword= req.body.password
    const data = jwt.verify(req.body.token, "pass");
    email=data.email
    console.log(newpassword,email)
    if(!email || !newpassword){
        res.json({message:"Invalid Credentials"})
    }
    let password= await bycrypt.hash(newpassword,10)
    let result = await Collectionlogin.updateOne(
        { email: email }, 
        { $set: { password: password } } 
      )  
    console.log(result)
    res.json({
        message:"Password changed"
    })
})

module.exports= router
const mongoose = require('mongoose');

const url = 'mongodb+srv://njlepzaneigk:njlepzaneigk@student.kbu3ywt.mongodb.net/Studentz?retryWrites=true&w=majority&appName=student';

// Asynchronous function to connect to MongoDB
async function connectToDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(url, {
      useNewUrlParser: true,  // Parse MongoDB connection strings
      useUnifiedTopology: true,  // Use the new Server Discover and Monitoring engine
      // Other options can be added here as needed
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call the function to connect
connectToDatabase();

const Schema = mongoose.Schema;

const callDetailsSchema= new Schema({
  name:{
    type:String
  },
  Phone:{
    type:String
  }
})

const CollectionOTP = new Schema({
  email:{
    type:String
  },
  otp:{
    type:String
  }
}) 
const Collectionlogin = new Schema({
  email:{
    type:String
  },
  Password:{
    type:String
  }
}) 
const CollectionCourse =new Schema({
  Name:{
    type:String
  }
})

const FormSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  mobileNumber: {
    type: String,  
    required: true
  },
  guardiansMobile: {
    type: String,  
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address.']  
  },
  guardiansName: {
    type: String,
    required: true
  },
  guardiansOccupation: {
    type: String,
    required: true
  },
  educationQualification: {
    type: String,
    required: true
  },
  course: {
    type: String,
    enum: ['course1', 'course2'],
    required: true
  },
  trainingMode: {
    type: String,
    enum: ['online', 'offline'],
    required: true
  },
  scopeLocation: {
    type: String,
    enum: ['technopark'],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  imagePath:{
    type: String
  }
}, {
  timestamps: true  
});

const Form = mongoose.model('Student', FormSchema);
const callDetails = mongoose.model('callDetails',callDetailsSchema)
const collectionOTP = mongoose.model('nevin',CollectionOTP, 'nevin')

module.exports = {Form,callDetails,collectionOTP};

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import User from './models/User.js';
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('connected to MongoDB');
})

//api routes starts hear

app.post('/Signup', async(req, res)=>{
    const {name, phone, email, password, role} = req.body;

    //validation to check if all fields are filled are start here

const emptyFields = [];

if (!name) emptyFields.push('name');
if (!phone) emptyFields.push('phone');
if (!email) emptyFields.push('email');
if (!password) emptyFields.push('password');
if (!role) emptyFields.push('role');


if(emptyFields.length > 0) {
    return res.json({
        success: false,
        message: `${emptyFields.join(', ')} are required`
    
    })
}
//validation to check if all fields are filled ends here

//validation to check if email already exist starts here
const existingUser = await User.findOne({ email: email });
if (existingUser) {
    return res.json({
        success: false,
        message: "Email already exists"

    })
}
//validation to check  if email already exist here ends here

//validation to check if phone already exist starts here
const existingUserPhone = await User.findOne({ phone: phone });
if(existingUserPhone){
    return req.json({
        success: false,
        message: "phone already exists"
    })
}


const user = new User({
    name: name,
    phone: phone,
    email: email,
    password: password,
    role: role
})


const savedUser = await user.save();
res.json({
    success: true,
    message:"User created successfully",
    data: savedUser
})
})


app.post('/login', async (req, res) => {
    const {email , password} = req.body;

    if(!email || !password) {
        return res.ison({
            success: false,
            message: "Email and password are required"
        })
    }
    const existingUser = await User.findOne({ email: email, password: password });

    if(existingUser){
        return res.json({
        success: true,
        message: "Login successfully",
        data: existingUser
    })
    }
    else
    {
 return res.json({
    success: false,
    message:"Invalid email or password"
 })
    }
})


//api routes end hear


app.listen(5000, ()=>{
    console.log(`server is running on port ${PORT}`);

})
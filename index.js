const express=require("express");
const homemodel=require("../backend/homemodel")
const cors =require("cors");
const mongoose = require("mongoose")
const app=express();
const nodemailer = require('nodemailer')
mongoose.connect("mongodb://localhost:27017/")
.then(()=>console.log("mongodb connected successfully"))
.catch((error)=>console.log(error));
app.use(express.json())
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello world");
})
app.post("/register", async (req, res) => {
    const { name, email, phonenumber, network } = req.body;
    
    try {
      const registration = await homemodel.create(req.body);
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "kanakadurgapulavarthy1406@gmail.com",
          pass:"wagv lrtl rlfz obho",
        },
      });
  

      const mailOptions = {
        from: "kanakadurgapulavarthy1406@gmail.com",
        to: "kanakadurgapulavarthy1406@gmail.com",
        subject: "Application received for fancy number",
        text: `Customer phone number: ${phonenumber}`,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.json("User application submitted successfully, email sent successfully");
    } catch (error) {
      console.error(error);
      res.status(400).json({ message:"error while submitting"});
    }
  });
app.listen(3000,()=>{
    console.log("server is runnning ");
});

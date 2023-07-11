// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "@/models/User";
import connectDb from "@/middelware/mongoose";
const CryptoJS = require("crypto-js");

    const handler = async(req, res) =>  {

        if(req.method == "POST"){
            const {name,email} = req.body;
            const encpass = CryptoJS.AES.encrypt(req.body.password,process.env.SECRETE_TOKEN).toString();
            const newUser = new User({name,email,password:encpass})
            newUser.save()
            res.status(200).json({ success:true,data:newUser })
           }else{
            res.status(400).json({ success:false,error:res.error })
            
           }
      }

export default connectDb(handler);
  
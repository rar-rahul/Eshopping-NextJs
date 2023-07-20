// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import User from "@/models/User";
import connectDb from "@/middelware/mongoose";
const CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


    const handler = async(req, res) =>  {

        console.log(req.body.password)

        if(req.method == "POST"){
            let user = await User.findOne({email:req.body.email})
            const newPass = CryptoJS.AES.decrypt(user.password,process.env.SECRETE_TOKEN);
            const dcrytedPass = JSON.parse(newPass.toString(CryptoJS.enc.Utf8));

            if(user){
                if(req.body.email == user.email && req.body.password == dcrytedPass){
                   
                    let token = jwt.sign({code:200,email:user.email,username:user.name  }, process.env.SECRETE_TOKEN);
                    res.status(200).json({tokenweb:token,email:user.email,username:user.name,success:true,code:200})
                }else{
                    res.status(400).json({ success:false,code:400,error:"Not Match"  })
                }

            }else{
                res.status(400).json({ success:false,code:400,error:"Not Found"  })
            }
            
           
           }else{
            res.status(400).json({ success:false,error:res.error })
           }
      }

export default connectDb(handler);
  

import Order from "@/models/Order";
import connectDb from "@/middelware/mongoose";
import jsonwebtoken from "jsonwebtoken";

    const handler = async(req, res) =>  {
       
        const data = jsonwebtoken.verify(req.body.token,process.env.SECRETE_TOKEN);

        console.log(data);

        if(req.method == "POST"){
            
            const order = new Order({
                name:req.body.name,
                email:data.email,
                products:req.body.cart,
                address:req.body.address,
                amount:100,
                mobile:req.body.mobile,
                pincode:req.body.pin ,
                orderId:"#202300111"
                
            })
            order.save()
            res.status(200).json({ success:true,data:order })
           }else{
            res.status(400).json({ success:false,error:res.error })
           }
      }

export default connectDb(handler);
  

import Order from "@/models/Order";
import connectDb from "@/middelware/mongoose";


    const handler = async(req, res) =>  {

        if(req.method == "POST"){
            
            const order = new Order({
                name:req.body.name,
                email:"rahul@gmail.com",
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
  
import Order from "@/models/Order";
import connectDb from "@/middelware/mongoose";
import jsonwebtoken from "jsonwebtoken";

const handler = async(req, res) =>  {
  const token = req.body.token;
  const data = jsonwebtoken.verify(token,process.env.SECRETE_TOKEN);
  const orders = await Order.find({ email: data.email });
  res.status(200).json({ orders });
}

export default connectDb(handler);

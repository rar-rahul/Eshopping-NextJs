import Order from "@/models/Order";
import connectDb from "@/middelware/mongoose";
import jsonwebtoken from "jsonwebtoken";

export default async function handler(req, res) {
  const token = req.body.token;
  const data = jsonwebtoken.verify(token,process.env.SECRETE_TOKEN);
  const orders = await Order.find({ email: data.email });

  res.status(200).json({ orders });
}

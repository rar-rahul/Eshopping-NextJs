const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    paymentInfo: { type: String, default:'' },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    amount: { type: String, required: true },
    mobile: { type: String, required: true },
    pincode: { type: String, required: true },
    orderId: { type: String},
    status: { type: String, default: 'pending', required: true },
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Order",orderSchema);

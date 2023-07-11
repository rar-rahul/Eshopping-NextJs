import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  await mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true }, () =>
  console.log("connected mongoDb"))
  // .then(() => console.log(`Database connected successfully`))
  // .catch((err) => console.log("Getting Error from DB connection" + err.message))
  //  mongoose.set('strictQuery', false);

   return handler(req, res);

};

export default connectDb;

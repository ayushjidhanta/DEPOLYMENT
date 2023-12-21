import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = `mongodb+srv://${process.env.REACT_MONGO_USERNAME}:${process.env.REACT_MONGO_PASSWORD}@demo.ai1hmta.mongodb.net/?retryWrites=true&w=majority`;
const connectToMongo = () => {
  try {
    connect(URI);
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default connectToMongo;

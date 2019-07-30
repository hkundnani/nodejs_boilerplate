import mongoose from "mongoose";

export const connect = () => {
  return mongoose.connect("mongodb://192.168.33.10:27017/test_db", {
    useNewUrlParser: true
  });
};

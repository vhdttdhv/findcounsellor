import mongoose from "mongoose";

const counsellorSchema = mongoose.Schema({
  name: String,
});

const CounsellorsInfo = mongoose.model("CounsellorsInfo", counsellorSchema);

export default CounsellorsInfo;

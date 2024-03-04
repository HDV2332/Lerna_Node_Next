import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const itemSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // material: {
  //   type: String,
  //   require: true,
  // },
  // manufacturer: {
  //   type: String,
  //   require: true,
  // },
  // item_code: {
  //   type: String,
  //   require: true,
  // },
  // description: {
  //   type: String,
  //   require: true,
  // },
  // release_date: {
  //   type: Date,
  //   require: false,
  // },
});

export default mongoose.model("Item", itemSchema);

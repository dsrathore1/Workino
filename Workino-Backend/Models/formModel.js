import mongoose from "mongoose";

const CustomerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    mob_number: {
      type: Number,
      unique: true,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    preferredTime: {
      type: String,
      default: "8:00-10:00 AM",
    },
    category: String,
  },
  { timestamps: true }
);

const FormModel = mongoose.model("CustomerDetails", CustomerSchema);

export default FormModel;

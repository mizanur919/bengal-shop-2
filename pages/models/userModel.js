import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, default: "guest" },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

let Dataset = mongoose.models.users || mongoose.model("users", userSchema);

export default Dataset;

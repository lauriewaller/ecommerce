import mongoose from "mongoose";
//create a schema for the user
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
  //adds created at and updated at for the above four fields
);
const User = mongoose.model("User", userSchema);
export default User;

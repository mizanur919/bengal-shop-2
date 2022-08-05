import bcrypt from "bcrypt";
import Users from "../models/userModel";

export default async function handler(req, res) {
  const body = req.body;
  const userExist = await Users.findOne({ email: body.email });
  if (userExist) {
    res.status(200).json({ message: "Already registered" });
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(body.password, salt);
  const user = new Users({
    name: body.name,
    email: body.email,
    password: hashPass,
  });
  await user.save();
  res.status(200).json({ message: "Registered successfully" });
}

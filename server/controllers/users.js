import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import speakeasy from "speakeasy"

import User from "../models/user.js";

export const signUp = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res
        .status(404)
        .json({ message: "User with this email already exists." });

    if (password !== confirmPassword)
      return res.status(404).json({ message: "Password fields do not match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const tempSecret = speakeasy.generateSecret()

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      secret: tempSecret.base32
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "secret", {
      expiresIn: "1h",
    });

    res.status(201).json({ result, token, secret });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Inalid credentials." });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      "secret",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      result: existingUser,
      token,
    });

    res.status(200).json({
      result: existingUser,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (!userExist) return res.status(404).json({ message: "Email invalid." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userExist.password
    );
    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Password invalid." });

    const token = jwt.sign(
      { email: userExist.email, id: userExist._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({
      result: {
        email: userExist.email,
        name: userExist.name,
        phone: userExist.phone,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName, phone } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(400).json({ message: "Email existed." });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      phone,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};

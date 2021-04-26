import CounsellorsInfo from "../models/ConsellorsInfo.js";

export const getAll = async (req, res) => {
  try {
    const allCounsellors = await CounsellorsInfo.find();
    res.status(200).json(allCounsellors);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }
};

export const createCounsellor = async (req, res) => {
  const body = req.body;

  const newCounsellor = new CounsellorsInfo(body);

  try {
    await newCounsellor.save();
    res.status(201).json(newCounsellor);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

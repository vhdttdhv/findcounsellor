import { check, validationResult } from "express-validator";
export const checkResult = async (req, res, next) => {
  try {
    const result = validationResult(req);
    console.log(result.array(), "hello mofo");
    if (result.isEmpty()) {
      console.log("yes ");
      return next();
    }
    res.status(400).json({ message: result.array() });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const checkAccount = async (req, res, next) => {
  try {
    console.log(req.body.password);
    // check("email")
    //   .trim()
    //   .not()
    //   .isEmpty()
    //   .withMessage("Email required!")
    //   .not()
    //   .isEmail()
    //   .withMessage("Invalid Email!"),
    //   check("password")
    //     .trim()
    //     .not()
    //     .isEmpty()
    //     .withMessage("Password required!")
    //     .isLength({ min: 6, max: 24 })
    //     .withMessage("Password can only be from 6 to 20 characters");
    check("password").isLength({ min: 6 }).withMessage("some message");
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

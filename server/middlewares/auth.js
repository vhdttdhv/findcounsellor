import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500; // google token has more than 500 chars;

    let decodedData;

    if (token && isCustomAuth) {
      // custom token
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData.id;
    } else {
      // google token
      decodedData = jwt.decode(token);
      req.userId = decodedData.sub;
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default auth;

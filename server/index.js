import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import CounsellorRoutes from "./routes/Counsellors.js";
import UserRoutes from "./routes/User.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());
// set diffrent routes to different api requests
// this will take us to server/consellors/...
// CounsellorRoutes is renamed from import
app.use("/counsellors", CounsellorRoutes);

app.use("/user", UserRoutes);

const PORT = process.env.PORT || 5000;
// connect to dtb
mongoose
  .connect(process.env.REACT_APP_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Port: http://localhost:${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

// to prevent warning
mongoose.set("useFindAndModify", false);

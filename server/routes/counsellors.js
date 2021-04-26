import express from "express";
import { getAll, createCounsellor } from "../controllers/CounsellorsHandler.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", auth, getAll);

router.post("/", auth, createCounsellor);

export default router;

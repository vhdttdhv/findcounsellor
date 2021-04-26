import express from "express";
import { signIn, signUp } from "../controllers/UserHandler.js";
import { checkAccount, checkResult } from "../middlewares/checkAccount.js";
const router = express.Router();
router.post("/signin", checkAccount, checkResult, signIn);
router.post("/signup", checkAccount, checkResult, signUp);
export default router;

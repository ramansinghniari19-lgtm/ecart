import express from "express";
import { loginUSer, myProfile, verifyUser } from "../controller/user.js";
import { isAuth } from "../middleware/isAuth.js";

const router=express.Router();

router.post("/user/login",loginUSer);
router.post("/user/verify",verifyUser)
router.get("/user/me",isAuth, myProfile)
export default router;
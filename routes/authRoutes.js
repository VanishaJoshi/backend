import express from "express";
import { login, register } from "../controllers/authController.js";
import { addJob, getJob, updateJob } from "../controllers/jobcontroller.js";
const authRoutes=express.Router();
//authRoutes.route('/login').post();
//authRoutes.route('register').post();
authRoutes.post("/login",login);
authRoutes.post("/register",register)


export default authRoutes; /*authentication = forget password check password from mail*/
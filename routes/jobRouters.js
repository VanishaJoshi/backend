import express from "express";
//import { login, register } from "../controllers/authController.js";
import { addJob, getJob, getJobs, removeJob, updateJob } from "../controllers/jobcontroller.js";
const jobRoutes=express.Router();
//authRoutes.route('/login').post();
//authRoutes.route('register').post();
jobRoutes.route('/').get(getJobs).post(addJob);
jobRoutes.route('/:id').get(getJob).delete(removeJob).patch(updateJob);


export default jobRoutes;
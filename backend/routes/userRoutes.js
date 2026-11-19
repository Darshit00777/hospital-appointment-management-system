import express from "express"
import { create, login, getdoctors, searchDoctor } from "../controller/userController.js"

const router = express.Router();

router.post("/register", create);
router.post("/login", login);
router.get("/doctors", getdoctors);
router.get("/searchdoctor/:name", searchDoctor);

export default router;
import express from "express"
import { createSlot, getschedule, bookApp, getSlot,pHistory, cancelApp } from "../controller/appointmentController.js";

const router = express.Router();

router.post("/add", createSlot);
router.get("/schedule/:doctor/:date", getschedule);
router.put("/book/:id", bookApp);
router.get("/getslot/:doctor/:date", getSlot);
router.get("/history/:patient", pHistory);
router.put("/cancel/:id", cancelApp);

export default router;
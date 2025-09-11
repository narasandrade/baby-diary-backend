import express from "express";
import { UserRecord } from "../models/UserRecord";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newUserRecord = new UserRecord(req.body);

    await newUserRecord.save();

    res.status(201).json(newUserRecord);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const records = await UserRecord.find({ user: userId }).sort({ creationDate: -1 });
    
    res.json(records);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
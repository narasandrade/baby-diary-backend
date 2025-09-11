import express from "express";
import { User } from "../models/User";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newUser = new User(req.body);

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error });
    }
});

router.get("/", async (req, res) => {
    const users = await User.find();

    res.json(users);
});

export default router;

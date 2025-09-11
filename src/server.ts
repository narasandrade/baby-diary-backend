import express from "express";
import cors from "cors";
import connectDB from "./database";
import userRoutes from "./routes/userRoutes";
import userRecordRoutes from "./routes/userRecordRoutes";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
    res.send("API working!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use("/users", userRoutes);
app.use("/userRecords", userRecordRoutes);


import mongoose, { Schema } from "mongoose";

const UserRecordSchema = new mongoose.Schema({
    content: { type: String, required: true },
    creationDate: { type: Date, required: true },
    userId: {type: Schema.Types.ObjectId, ref: "User",  required: true}
});

export const UserRecord = mongoose.model("UserRecord", UserRecordSchema);

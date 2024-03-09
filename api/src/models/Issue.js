import mongoose from "mongoose";

const issueSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  desc: { type: String },
}, { versionKey: false });

const issue = mongoose.model("issues", issueSchema);

export default issue;

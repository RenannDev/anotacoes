import express from "express";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "../backend/src/config/db.js";
import dotenv from "dotenv"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001

connectDB();

app.use(express.json())
// 9m3gMGXMd4l0Q4LP
// vrenansousa_db_user
// mongodb+srv://vrenansousa_db_user:9m3gMGXMd4l0Q4LP@cluster0.agqxpha.mongodb.net/?appName=Cluster0

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server rodando:", PORT);
});

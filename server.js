import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";
import { router } from "./routes/userROUTE.js";


dotenv.config();

const app = express();
//middleware
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
connectDB();
app.use("/User", router);

app.listen(PORT, ()=>console.log(`server is running on http://localhost:${PORT}`))

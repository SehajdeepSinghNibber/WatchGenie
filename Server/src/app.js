import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.use("/api/v1/auth",authRoutes)

export default app;
import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js"

dotenv.config();

const app = express();

app.use(express.json()); //will allow us to parse req.body

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/movie",movieRoutes)

export default app;
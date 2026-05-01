import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js"
import tvRoutes from "./routes/tv.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/movie",movieRoutes)
app.use("/api/v1/tv",tvRoutes)

export default app;

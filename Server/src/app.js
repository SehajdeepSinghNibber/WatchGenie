import express from "express";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js"
import tvRoutes from "./routes/tv.route.js";
import { protectRoute } from "./middleware/protectRoute.js";
import cookieParser from "cookie-parser"
import searchRoutes from "./routes/search.route.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser())

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/movie",protectRoute,movieRoutes)
app.use("/api/v1/tv",protectRoute,tvRoutes)
app.use("/api/v1/tv",protectRoute,searchRoutes)

export default app;

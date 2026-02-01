import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/book.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api", bookRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port = http://localhost:${PORT}`);
});

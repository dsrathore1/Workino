import express from "express";
import cors from "cors";
import { config } from "dotenv";

import routes from "./Routes/routes.js";
import connectDB from "./DB/connectDB.js";
import userRoutes from "./Routes/usersRoutes.js";

config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.set("views", "Templates");
app.set("view engine", "ejs");

app.use(routes);
app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`your site is live on http://localhost:${PORT}`);
});

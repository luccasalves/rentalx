import express from "express";
import logger from "morgan";
import { categoriesRoutes } from "./routes/categoriesRouter";
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("server is running"));

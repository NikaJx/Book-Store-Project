import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Hello");
});

app.use("/books", booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");

        app.listen(PORT, () => {
            console.log(`App listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

import express from 'express';
import http from 'http';
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from './router';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(
    cors({
        credentials: true
    })
);

app.use(compression());
app.use(cookieparser());
app.use(bodyparser.json());

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
    console.log("8000 de calsııyo")
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on(
    "error", (error: Error) => console.log(error)
);

app.use('/', router());

import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const loggerMiddleware = morgan("dev");

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

const handleHome = (req, res) => {
    return res.send("I love Middlewares");
};

app.use(loggerMiddleware);
app.get("/", logger, handleHome);

const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import resizeRouter from "./routes/resizeRouter";

dotenv.config();

//Instantiating express app
const app: Application = express();

// Use the routes/resizeRouter file to handle all the requests to endpoints that starts with "resize"
app.use("/resize", resizeRouter);

// Handle requests to root
app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.send("Hello world!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port 5000"));

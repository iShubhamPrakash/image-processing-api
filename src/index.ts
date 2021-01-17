import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.get("/",(req: Request, res: Response, next: NextFunction) => {
  console.log("Hello");
	res.send("Hello world!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port 5000"));



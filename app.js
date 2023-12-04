import express from "express";
import bodyParser from "body-parser";
import multiplyRouter from "./apps/multiply.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/multiply", multiplyRouter);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

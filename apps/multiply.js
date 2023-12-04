import { Router } from "express";
import checkAuthorization from "../middlewares/checkAuthorization.js";
import validateInput from "../middlewares/validateInput.js";

const multiplyRouter = Router();

multiplyRouter.post("/", checkAuthorization, validateInput, (req, res) => {
  const { a, b } = req.body;
  const result = a * b;
  res.status(200).json({ result });
});

export default multiplyRouter;

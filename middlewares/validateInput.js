function validateInput(req, res, next) {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(422).json({ error: "Unsupported data format" });
  }

  next();
}

export default validateInput;

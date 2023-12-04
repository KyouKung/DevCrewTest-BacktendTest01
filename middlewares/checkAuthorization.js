function checkAuthorization(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader !== "DEVCREW-BACKEND-TEST") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

export default checkAuthorization;

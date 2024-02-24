export const authMiddleware = (req, res, next) => {
  try {
    const { token } = req.body;

    if (token === process.env.TOKEN) {
      next();
      res.setHeader("Content-Type", "application/json");
    } else {
      res.status(401).json("Unauthorized User");
    }
  } catch (error) {
    if (error) throw error;
  }
};

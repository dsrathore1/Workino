import { Router } from "express";
import FormModel from "../Models/formModel.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "All fine❤️" });
});

routes.post("/", async (req, res) => {
  const formData = req.body;
  const data = await FormModel(formData);
  try {
    const saveData = await data.save();

    res.json({
      message: "Data include successfully",
      data: saveData,
    });
  } catch (error) {
    if (error) throw error;
  }
});

export default routes;

import { Router } from "express";
import FormModel from "../Models/formModel.js";
import { authMiddleware } from "../Middleware/auth.js";

const routes = Router();

// routes.get("/getAllData", authMiddleware, async (req, res) => {
//   const getData = await FormModel.find({});

//   res.json({
//     message: "Customers Data",
//     data: getData,
//   });
// });

routes.post("/getAllData", authMiddleware, async (req, res) => {
  const getData = await FormModel.find({});
  res.json({
    message: "Customers Data",
    data: getData,
  });
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

routes.delete("/deleteAll", async (req, res) => {
  try {
    await FormModel.deleteMany({});
    res.send("Delete All data successfully");
  } catch (error) {
    if (err) throw err;
  }
});

export default routes;

import { Router } from "express";
import {
  deleteAll,
  deleteByID,
  // getAllData,
  getDataByID,
  homeRoute,
  mainPostData,
  postAllData,
  updateByID,
} from "../Controller/controllers.js";

const routes = Router();

// routes.get("/getAllData", getAllData);

routes.post("/getAllData", postAllData);

routes.get("/", homeRoute);

routes.post("/", mainPostData);

routes.delete("/deleteAll", deleteAll);

routes.get("/oneData/:id", getDataByID);

routes.delete("/deleteOneData/:id", deleteByID);

routes.put("/updateData/:id", updateByID);

export default routes;

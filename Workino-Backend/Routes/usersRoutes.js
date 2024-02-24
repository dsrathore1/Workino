import { Router } from "express";
import {
  handleUserLogin,
  handleUserSignUp,
} from "../Controller/userController.js";

const userRoutes = Router();

userRoutes.post("/userSignUp", handleUserSignUp);

userRoutes.get("/userSignUp", (req, res) => {
  res.render("signUp.ejs", {
    title: "Sign Up",
  });
});

userRoutes.post("/userLogin", handleUserLogin);
userRoutes.get("/userLogin", (req, res) => {
  res.render("login.ejs", {
    title: "Login",
  });
});

export default userRoutes;

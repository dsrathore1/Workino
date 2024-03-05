import userModel from "../Models/user.js";

import { v4 as uuid } from "uuid";

export async function handleUserSignUp(req, res) {
  const { name, email, pwd } = req.body;

  await userModel.create({
    name,
    email,
    pwd,
  });
  return res.redirect("/userSignUp");
}

export async function handleUserLogin(req, res) {
  const { email, pwd } = req.body;

  const user = await userModel.findOne({
    email,
    pwd,
  });

  if (!user) {
    return res.status(422).render("login.ejs", {
      error: "Invalid Email or Password",
      title: "Login",
    });
  }

  const sessionId = uuid();
  
  return res.redirect("/");
}

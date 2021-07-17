import express from "express";
const routes = express.Router();
import { verifyToken } from "../controllers/verifyLogin.js";

routes.get("/asdf", verifyToken, (req, res) => {
  res.statusCode = 200;
  res.send("funcionando");
});

export default routes;

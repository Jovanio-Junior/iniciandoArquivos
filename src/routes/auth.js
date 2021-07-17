import express from "express";
const routes = express.Router();
import { login } from "../routes/controllers/login.js";

routes.post("/login", login);

export default routes;

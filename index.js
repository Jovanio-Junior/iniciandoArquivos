import express from "express";
import bodyParser from "body-parser";
import routes from "./src/routes/routes.js";
const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(3000, () => {
  console.log("servidor iniciado na porta 3000 / localhost:3000");
});

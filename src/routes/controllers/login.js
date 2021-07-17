import jwt from "jsonwebtoken";
import secretKey from "../../config/jwt/secretKey.js";
import jwtOption from "../../config/jwt/options.js";
import db from "../../../db.js";

export function login(req, res) {
  console.log("Post -> /login ");
  console.log(req.body);

  try {
    if (req.body.login) {
      var user = db.find((u) => u.email == req.body.login);
      if (user) {
        if (user.password == req.body.password) {
          jwt.sign(
            {
              email: user.email,
            },
            secretKey,
            { ...jwtOption.sign },
            (err, token) => {
              if (!err) {
                console.log({
                  status: "token gerado!",
                  token: token,
                });
                res.statusCode = 200;
                res.send({
                  status: `token gerado! para o login ${user.email}`,
                  token: token,
                });
              } else {
                console.log(err);
                res.statusCode = 500;
                res.send({ err: "Erro interno do servidor" });
              }
            }
          );
        } else {
          res.statusCode = 404;
          res.send({ err: "Usuario ou Senha incorretos!!" });
          console.log("A senha informada está incorreta!!");
        }
      } else {
        res.statusCode = 404;
        res.send({ err: "Usuario ou Senha incorretos!!" });
        console.log("Usuario não consta na base de dados!!");
      }
    } else {
      res.statusCode = 401;
      res.send({ err: "O campo de Login não foi informado!!" });
      console.log("O campo de Login não foi informado!!");
    }
  } catch (err) {}
}

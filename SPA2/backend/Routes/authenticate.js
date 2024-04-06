// import jwtmod from "jsonwebtoken";

const jwtmod = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  const token = bearerHeader && bearerHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;

  try {
    const decodedToken = jwtmod.verify(token, public_key, {
      algorithms: ["RS256"],
    });

    const { email } = decodedToken;
    req.user = email;
    next();
  } catch (error) {
    res.status(401).send("Invalid token");
  }
};

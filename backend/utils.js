import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    //.sign method generates a token. 1st param is the obj we use to generate token. 2nd param is a key to encrypt data and generate token. 3rd param is options.
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};
//creating a middleware to authenticate user
export const isAuth = (req, res, next) => {
  // gets auth filled from headers of this request
  const authorization = req.headers.authorization;
  if (authorization) {
    // get token from authorization
    const token = authorization.slice(7, authorization.length); // authorization format is like this: Bearer XXXXXX. So, we remove "Bearer ".
    //use jwt to decrypt the token
    jwt.verify(
      token,
      //if doesn't exist, use somethingsecret
      process.env.JWT_SECRET || "somethingsecret",
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: "Invalid Token" });
        } else {
          //decode here is the info about the user
          //fills req.user with decode. Within jwt.verify, decode gives us access to _id, name, etc created under jwt.sign above
          req.user = decode;
          //then, with next, we pass user property to the next middleware, which is in orderRouter
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

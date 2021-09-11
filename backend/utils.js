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

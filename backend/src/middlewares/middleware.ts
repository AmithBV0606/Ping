//  To protect the routes from Unauthorized users :

import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const middleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (authHeader === null || authHeader === undefined) {
    return response
      .status(401)
      .json({ status: 401, message: "Unauthorized Request!!" });
  }

  const token = authHeader.split(" ")[1];

  // Verifying the Token :
  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      return response
        .status(401)
        .json({ status: 401, message: "Unauthorized Request!!" });
    }
    request.user = user as AuthUser;
    next();
  });
};

export default middleware;

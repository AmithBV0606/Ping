import { Request, Response } from "express";
import { LoginPayloadType } from "../types";
import prismaClient from "../config/db.config";
import jwt from "jsonwebtoken";

export async function login(request: Request, response: Response) {
  try {
    const body: LoginPayloadType = request.body;

    // Check if the user exists in our Database :
    let user = await prismaClient.user.findUnique({
      where: {
        email: body.email,
      },
    });

    // If not, create a new entry for the user in our Database :
    if (!user) {
      user = await prismaClient.user.create({
        data: body,
      });
    }

    // If the user already exists in our Database :

    // Step 1 : Create a JWT Payload :
    let JWTPayload = {
      id: user.id,
      name: body.name,
      email: body.email,
    };

    // Step 2 : Generate Token :
    const token = jwt.sign(JWTPayload, process.env.JWT_SECRET!, {
      expiresIn: "365d",
    });

    // Step 3 : Return the token to user :
    return response.json({
      message: "Logged in successfully!!",
      user: {
        ...user,
        token: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!!" });
  }
}

import { Request, Response } from "express";
import prismaClient from "../config/db.config";

export async function Store(request: Request, response: Response) {
  try {
    const body = request.body;
    const user = request.user;

    await prismaClient.chatGroup.create({
      data: {
        user_id: Number(user?.id),
        title: body.title,
        passcode: body.passcode,
      },
    });

    return response.json({ message: "Chat Group created successfully!" });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!!" });
  }
}

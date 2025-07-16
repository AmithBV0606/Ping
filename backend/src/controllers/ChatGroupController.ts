import { Request, Response } from "express";
import prismaClient from "../config/db.config";

// To create the chat group :
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

// To get all the chat groups created by the user :
export async function Index(request: Request, response: Response) {
  try {
    const user = request.user;

    const allGroups = await prismaClient.chatGroup.findMany({
      where: {
        user_id: user?.id,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return response.json({
      message: "Chat Group fetched successfully!",
      data: allGroups,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!!" });
  }
}

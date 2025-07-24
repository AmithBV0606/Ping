import { Request, Response } from "express";
import prismaClient from "../config/db.config";

export async function ChatsIndex(request: Request, response: Response) {
  try {
    const { groupId } = request.params;

    const chats = await prismaClient.chats.findMany({
      where: {
        group_id: groupId,
      },
    });

    return response.json({
      message: "Chats fetched successfully!",
      data: chats,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!" });
  }
}

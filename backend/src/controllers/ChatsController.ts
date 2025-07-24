import { Request, Response } from "express";
import prismaClient from "../config/db.config";
import { receiver } from "../config/qstash.config";

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

export async function StoreChats(request: Request, response: Response) {
  try {
    const signature = request.header("Upstash-Signature");
    const body = request.body;

    if (!signature) {
      return response.status(400).send("Missing Upstash Signature");
    }

    const isValid = await receiver.verify({
      signature,
      body,
    });

    if (!isValid) {
      return response.status(401).send("Invalid Signature");
    }

    const data = JSON.parse(body);

    const chat = await prismaClient.chats.create({
      data: data,
    });

    return response.json({
      message: "Stored the chat successfully!",
      data: data,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!" });
  }
}

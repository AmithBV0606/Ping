import { Request, Response } from "express";
import prismaClient from "../config/db.config";

export async function Index(request: Request, response: Response) {
  try {
    const { group_id } = request.query;

    const users = await prismaClient.groupUsers.findMany({
      where: {
        group_id: group_id as string,
      },
    });

    return response.json({
      message: "Group chat user's info fetched successfully!",
      data: users,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!" });
  }
}

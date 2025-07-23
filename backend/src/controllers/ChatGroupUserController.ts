import { Request, Response } from "express";
import prismaClient from "../config/db.config";
import { GroupUsersType } from "../types";

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

export async function Store(request: Request, response: Response) {
  try {
    const body: GroupUsersType = request.body;

    const user = await prismaClient.groupUsers.create({
      data: {
        group_id: body.group_id,
        name: body.name,
      },
    });

    return response.json({
      message:
        "Entry for individual Group chat user has been created successfully!",
      data: user,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!" });
  }
}

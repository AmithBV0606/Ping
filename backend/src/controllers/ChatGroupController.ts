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
      message: "All Chat Groups fetched successfully!",
      data: allGroups,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!!" });
  }
}

// To get a particular chat group's info(id of chat group is needed) :
export async function Show(request: Request, response: Response) {
  try {
    const { id } = request.params;

    const aSpecificGroup = await prismaClient.chatGroup.findUnique({
      where: {
        id: id,
      },
    });

    return response.json({
      message: "The requested Chat Group has been fetched successfully!",
      data: aSpecificGroup,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!!" });
  }
}

// To Update a particular chat group's info :
export async function Update(request: Request, response: Response) {
  try {
    const body = request.body;
    const { id } = request.params;

    const aSpecificUpdatedGroup = await prismaClient.chatGroup.update({
      where: {
        id: id,
      },
      data: {
        title: body.title,
        passcode: body.passcode,
      },
    });

    return response.json({
      message: "The requested Chat Group has been updated successfully!",
      data: aSpecificUpdatedGroup,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!!" });
  }
}

// To delete a specific chat group :
export async function Delete(request: Request, response: Response) {
  try {
    const { id } = request.params;

    const aSpecificDeletedGroup = await prismaClient.chatGroup.delete({
      where: {
        id: id,
      },
    });

    return response.json({
      message: "The requested Chat Group has been deleted successfully!",
      id: aSpecificDeletedGroup.id,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something went wrong. Please try again later!!" });
  }
}

import { ISODateString } from "next-auth";
import z from "zod";
import { chatGroupSchema } from "@/validations/index";

export interface CustomUser {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string | null;
  token?: string | null;
}

export interface CustomSession {
  user?: CustomUser;
  expires: ISODateString;
}

export type createChatGroupSchemaType = z.infer<typeof chatGroupSchema>;

export type GroupChatType = {
  id: string;
  user_id: number;
  title: string;
  passcode: string;
  created_at: string;
};

export type GroupChatUsersType = {
  id: number;
  group_id: string;
  name: string;
  created_at: string;
};

export type MessageType = {
  id: string;
  group_id: string;
  name: string;
  messgae: string;
  created_at: string;
};

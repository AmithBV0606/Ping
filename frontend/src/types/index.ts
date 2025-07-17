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

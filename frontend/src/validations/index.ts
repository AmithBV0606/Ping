import * as z from "zod";

export const chatGroupSchema = z
  .object({
    title: z
      .string()
      .min(4, {
        message: "Chat group's title must be of atleast 4 characters long.",
      })
      .max(191, {
        message: "Chat group's title must not exceed 191 characters.",
      }),
    passcode: z
      .string()
      .min(4, {
        message: "Chat group's passcode must be of atleast 4 characters long.",
      })
      .max(25, {
        message: "Chat group's passcode must not exceed 25 characters.",
      }),
  })
  .required();

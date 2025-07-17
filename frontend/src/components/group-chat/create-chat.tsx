"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { chatGroupSchema } from "@/validations";
import { createChatGroupSchemaType, CustomUser } from "@/types";
import { Input } from "../ui/input";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { CHAT_GROUP_URL } from "@/lib/apiEndPoints";

export default function CreateChat({ user }: { user: CustomUser | undefined }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createChatGroupSchemaType>({
    resolver: zodResolver(chatGroupSchema),
  });

  const onSubmit = async (payload: createChatGroupSchemaType) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        CHAT_GROUP_URL,
        { ...payload, user_id: user?.id },
        {
          headers: {
            Authorization: user?.token,
          },
        }
      );

      if (data?.message) {
        setLoading(false);
        setOpen(false);
        toast.success(data?.message);
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again later!!");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="cursor-pointer">
          Create Group
        </Button>
      </DialogTrigger>

      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create a New Chat Group</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 space-y-1">
            <Input
              placeholder="Enter Chat Group's Title"
              {...register("title")}
            />
            {errors?.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          <div className="mt-4 space-y-1">
            <Input
              className="outline-none"
              placeholder="Enter Chat Group's Passcode"
              {...register("passcode")}
            />
            {errors?.passcode && (
              <span className="text-red-500 text-sm">
                {errors.passcode.message}
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center justify-end">
            <Button
              type="submit"
              variant={"default"}
              className="ml-auto cursor-pointer"
              disabled={loading ? true : false}
            >
              {loading ? "Processing..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

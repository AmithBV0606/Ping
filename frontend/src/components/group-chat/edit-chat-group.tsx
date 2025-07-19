"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { createChatGroupSchemaType, CustomUser, GroupChatType } from "@/types";
import { chatGroupSchema } from "@/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { CHAT_GROUP_URL } from "@/lib/apiEndPoints";
import { toast } from "sonner";
import { ClearCache } from "@/actions/clear-cache";

export default function EditChatGroup({
  open,
  setOpen,
  group,
  user,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  group: GroupChatType;
  user: CustomUser;
}) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<createChatGroupSchemaType>({
    resolver: zodResolver(chatGroupSchema),
  });

  const onSubmit = async (payload: createChatGroupSchemaType) => {
    try {
      setLoading(true);
      const { data } = await axios.put(
        `${CHAT_GROUP_URL}/${group.id}`,
        payload,
        {
          headers: {
            Authorization: user.token,
          },
        }
      );

      if (data?.message) {
        setOpen(false);
        toast.success(data?.message);
        ClearCache("dashboard");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong.please try again!");
      }
    }
  };

  useEffect(() => {
    setValue("title", group.title);
    setValue("passcode", group.passcode);
  }, [group]);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Chat Group</DialogTitle>

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
                  {loading ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

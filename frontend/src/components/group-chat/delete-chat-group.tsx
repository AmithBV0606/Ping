"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ClearCache } from "@/actions/clear-cache";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import { CHAT_GROUP_URL } from "@/lib/apiEndPoints";

export default function DeleteChatGroup({
  open,
  setOpen,
  token,
  groupId,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  token: string;
  groupId: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const { data } = await axios.delete(`${CHAT_GROUP_URL}/${groupId}`, {
        headers: {
          Authorization: token,
        },
      });

      if (data?.message) {
        ClearCache("dashboard");
        toast.success(data?.message);
        setOpen(false);
      }

      setLoading(false);
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
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete and
            remove your Chat Group from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={loading}
            className="bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60"
          >
            {loading ? "Processing.." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

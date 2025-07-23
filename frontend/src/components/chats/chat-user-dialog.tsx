"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GroupChatType } from "@/types";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { CHAT_GROUP_USERS_URL } from "@/lib/apiEndPoints";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export default function ChatUserDialog({
  open,
  setOpen,
  group,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  group: GroupChatType;
}) {
  const [state, setState] = useState({
    name: "",
    passcode: "",
  });

  const params = useParams();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const localData = localStorage.getItem(params["id"] as string);

    if (!localData) {
      try {
        const { data } = await axios.post(CHAT_GROUP_USERS_URL, {
          name: state.name,
          group_id: params["id"] as string,
        });

        localStorage.setItem(
          params["id"] as string,
          JSON.stringify(data?.data)
        );
      } catch (error) {
        toast.error("Something went wrong. Please try again!");
      }
    }

    // Password Check :
    if (group.passcode !== state.passcode) {
      toast.error("Please enter correct passcode!");
    } else {
      setOpen(false);
    }
  };

  // UseEffect to check if the user previously joined any group or not :
  useEffect(() => {
    const data = localStorage.getItem(params["id"] as string);

    if (data) {
      const jsonData = JSON.parse(data);
      if (jsonData?.name && jsonData?.group_id) {
        setOpen(false);
      }
    }
  }, []);

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Name and Passcode</DialogTitle>

          <DialogDescription className="mt-2">
            Add your name and passcode to join the room. If you don't know
            passcode, you may reach out to the creator of this room.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="">
          <div className="mt-4">
            <Input
              placeholder="Enter your Name"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <Input
              placeholder="Enter Passcode"
              value={state.passcode}
              onChange={(e) => setState({ ...state, passcode: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <Button className="w-full cursor-pointer">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

"use client";

import React, { Suspense, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import DeleteChatGroup from "./delete-chat-group";
import { CustomUser, GroupChatType } from "@/types";
import EditChatGroup from "./edit-chat-group";
import Env from "@/lib/env";
import { toast } from "sonner";

export default function GroupChatCardMenu({
  group,
  user,
}: {
  group: GroupChatType;
  user: CustomUser;
}) {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(`${Env.APP_URL}/chat/${group.id}`);
    toast.success("Link copied to your clipboard.");
  };

  return (
    <div>
      {deleteDialog && (
        <Suspense fallback={<p>Loading...</p>}>
          <DeleteChatGroup
            open={deleteDialog}
            setOpen={setDeleteDialog}
            token={user.token!}
            groupId={group.id}
          />
        </Suspense>
      )}

      {editDialog && (
        <Suspense fallback={<p>Loading...</p>}>
          <EditChatGroup
            open={editDialog}
            setOpen={setEditDialog}
            user={user}
            group={group}
          />
        </Suspense>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <EllipsisVertical className="h-5 w-5" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer" onClick={handleCopy}>
            Copy
          </DropdownMenuItem>

          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setEditDialog((prev) => !prev)}
          >
            Edit
          </DropdownMenuItem>

          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setDeleteDialog((prev) => !prev)}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

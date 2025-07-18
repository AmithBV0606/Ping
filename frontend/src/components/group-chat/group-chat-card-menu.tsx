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

export default function GroupChatCardMenu({ group, user }: { group: GroupChatType, user: CustomUser}) {
  const [deleteDialog, setDeleteDialog] = useState(false);

  return (
    <div>
      {deleteDialog && (
        <Suspense fallback={<p>Loading...</p>}>
          <DeleteChatGroup open={deleteDialog} setOpen={setDeleteDialog} token={user.token!} groupId={group.id} />
        </Suspense>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <EllipsisVertical className="h-5 w-5" />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer">Copy</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
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

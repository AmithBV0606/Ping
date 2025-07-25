"use client";

import React, { useEffect, useState } from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { GroupChatType, GroupChatUsersType, MessageType } from "@/types";
import { ChatSidebar } from "./chat-sidebar";
import ChatUserDialog from "./chat-user-dialog";
import ChatInterface from "./chat-interface";

export default function ChatBase({
  group,
  users,
  oldMessages
}: {
  group: GroupChatType;
  users: Array<GroupChatUsersType> | [];
  oldMessages: Array<MessageType> | [];
}) {
  const [open, setOpen] = useState(true);
  const [chatUser, setChatUser] = useState<GroupChatUsersType>();

  useEffect(() => {
    const localData = localStorage.getItem(group.id);
    if (localData) {
      const data = JSON.parse(localData);
      setChatUser(data);
    }
  }, [group.id]);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      {open && <ChatUserDialog open={open} setOpen={setOpen} group={group} />}

      <ChatSidebar users={users} />

      <SidebarInset>
        {/* Chat header : */}
        <header className="flex h-12 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 cursor-pointer" />

          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>

        {/* Chat UI : */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="bg-muted/60 flex-1 rounded-xl md:min-h-min">
            <ChatInterface group={group} chatUser={chatUser} oldMessages={oldMessages} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

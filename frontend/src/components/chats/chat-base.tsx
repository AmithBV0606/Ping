"use client";

import React, { useState } from "react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { GroupChatType, GroupChatUsersType } from "@/types";
import { ChatSidebar } from "./chat-sidebar";
import ChatUserDialog from "./chat-user-dialog";

export default function ChatBase({
  group,
  users,
}: {
  group: GroupChatType;
  users: Array<GroupChatUsersType> | [];
}) {
  // let socket = useMemo(() => {
  //   const socket = getSocket();
  //   socket.auth = {
  //     room: groupId,
  //   };
  //   return socket.connect();
  // }, []);

  // useEffect(() => {
  //   socket.on("message", (data: any) => {
  //     console.log("The socket message is, ", data);
  //   });

  //   return () => {
  //     socket.close();
  //   };
  // }, []);

  // const handleClick = () => {
  //   socket.emit("message", { name: "Amith", id: uuidv4() });
  // };
  const [open, setOpen] = useState(true);

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
        <header className="flex h-14 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1 cursor-pointer" />

          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />

          <div className="mr-1 text-2xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
            {/* <CreateChat user={session?.user} /> */}
            {group.title}
          </div>
        </header>

        {/* Chat UI : */}
      </SidebarInset>
    </SidebarProvider>
  );
}

"use client";

import { getSocket } from "@/lib/socket.config";
import { GroupChatType, GroupChatUsersType, MessageType } from "@/types";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Users } from "lucide-react";
import { SendHorizontal } from "lucide-react";
import { Button } from "../ui/button";

export default function ChatInterface({
  group,
  oldMessages,
  chatUser,
}: {
  group: GroupChatType;
  oldMessages: Array<MessageType> | [];
  chatUser?: GroupChatUsersType;
}) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<MessageType>>(oldMessages);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when someone sends message :
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Submit handler :
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (message.length === 0) {
      toast.warning("You cannot send empty messages!!");
      return;
    }

    const payload: MessageType = {
      id: uuidv4(),
      group_id: group.id,
      name: chatUser?.name ?? "Unknown",
      message: message,
      created_at: new Date().toISOString(),
    };

    socket.emit("message", payload);
    setMessage("");
    setMessages([...messages, payload]);
    scrollToBottom();
  };

  // Socket Io connection from the Frontend :
  let socket = useMemo(() => {
    const socket = getSocket();
    socket.auth = {
      room: group.id,
    };
    return socket.connect();
  }, []);

  useEffect(() => {
    socket.on("message", (data: MessageType) => {
      console.log("The socket message is, ", data);
      setMessages((prevMessages) => [...prevMessages, data]);
      scrollToBottom();
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="flex flex-col h-[93vh] border border-gray-800 rounded-xl">
      {/* Chat Header : */}
      <div className="h-[10%] flex items-center gap-2">
        <Avatar className="h-11 w-11 rounded-full border border-gray-500 ml-4">
          {/* <AvatarImage src={user.avatar} alt={user.name} /> */}
          <AvatarFallback className="text-2xl">{group.title[0]}</AvatarFallback>
        </Avatar>

        <h1 className="text-2xl font-semibold">{group.title}</h1>

        <Users />
      </div>

      <Separator className="bg-[#30343F]" />

      {/* Chat Body : */}
      <div className="flex-1 flex flex-col-reverse py-4 px-6 bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] max-h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div ref={messagesEndRef} />

        <div className="flex flex-col gap-2 pt-4">
          {messages?.map((message) => (
            <div
              key={message.id}
              className={`max-w-sm rounded-lg flex flex-col p-2 mt-3 ${
                message.name === chatUser?.name
                  ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white self-end"
                  : "bg-gradient-to-r from-gray-300 to-gray-300 text-black self-start"
              }`}
            >
              {message.name !== chatUser?.name && (
                <span className={`text-[10px] font-light text-gray-700`}>
                  {message.name}
                </span>
              )}

              <span className="font-medium">{message.message}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-[#30343F]" />

      {/* Send Message : */}
      <form onSubmit={handleSubmit} className="mt-2 flex items-center mx-4 gap-4 h-20">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          className="flex-1 p-2 border border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 h-10 overflow-hidden"
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-400 cursor-pointer">
          <SendHorizontal />
        </Button>
      </form>
    </div>
  );
}

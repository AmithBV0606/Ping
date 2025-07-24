"use client";

import { getSocket } from "@/lib/socket.config";
import { GroupChatType, GroupChatUsersType, MessageType } from "@/types";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "../ui/input";
import { v4 as uuidv4 } from "uuid";

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

    const payload: MessageType = {
      id: uuidv4(),
      group_id: group.id,
      name: chatUser?.name ?? "Unknown",
      message: message,
      created_at: new Date().toISOString(),
    };

    socket.emit("message", payload);
    setMessage("");
    setMessages((prevMessages) => [...prevMessages, payload]);
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
    <div className="flex flex-col h-[90vh] p-4">
      {/* Chat Header : */}
      <div></div>

      {/* Chat Body : */}
      <div className="flex-1 overflow-y-auto flex flex-col-reverse">
        <div ref={messagesEndRef} />

        <div className="flex flex-col gap-2">
          {messages?.map((message) => (
            <div
              key={message.id}
              className={`max-w-sm rounded-lg flex flex-col p-2 ${
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

      {/* Send Message : */}
      <form onSubmit={handleSubmit} className="mt-2 flex items-center">
        <Input
          type="text"
          placeholder="Type a message..."
          value={message}
          className="flex-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

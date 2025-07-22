import ChatBase from "@/components/chats/chat-base";
import React from "react";

export default async function ChatsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1>Hello I am chat!!</h1>
      <p className="text-2xl">ID : {id}</p>
      <ChatBase groupId={id} />
    </div>
  );
}

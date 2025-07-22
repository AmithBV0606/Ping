import ChatBase from "@/components/chats/chat-base";
import { fetchChatGroup } from "@/data-fetching/fetch-chat-groups";
import { GroupChatType } from "@/types";
import { notFound } from "next/navigation";
import React from "react";

export default async function ChatsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id.length !== 36) {
    return notFound();
  }

  const group: GroupChatType = await fetchChatGroup(id);

  if (group === null) {
    return notFound();
  }

  return (
    <div>
      <h1>Hello I am chat!!</h1>
      <p className="text-2xl">ID : {id}</p>
      <ChatBase groupId={id} />
    </div>
  );
}

import ChatBase from "@/components/chats/chat-base";
import {
  fetchChatGroup,
  fetchChatGroupUsers,
} from "@/data-fetching/fetch-chat-groups";
import { fetchChats } from "@/data-fetching/fetch-chats";
import { GroupChatType, GroupChatUsersType, MessageType } from "@/types";
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

  const chatGroup: GroupChatType = await fetchChatGroup(id);

  if (chatGroup === null) {
    return notFound();
  }

  const chatGroupUsers: Array<GroupChatUsersType> | [] =
    await fetchChatGroupUsers(id);

  const chats: Array<MessageType> | [] = await fetchChats(id);

  return <ChatBase group={chatGroup} users={chatGroupUsers} oldMessages={chats} />;
}

import { CHATS_URL } from "@/lib/apiEndPoints";

export async function fetchChats(groupId: string) {
  const res = await fetch(`${CHATS_URL}/${groupId}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch chat group's data!!");
  }

  const result = await res.json();

  if (result?.data) {
    return result?.data;
  }

  return [];
}

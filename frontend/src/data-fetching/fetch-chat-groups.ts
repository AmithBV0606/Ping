import { CHAT_GROUP_URL } from "@/lib/apiEndPoints";

export async function fetchChatGroups(token: string) {
  const res = await fetch(CHAT_GROUP_URL, {
    headers: {
      Authorization: token,
    },
    next: {
      revalidate: 60 * 60,
      tags: ["dashboard"],
    },
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

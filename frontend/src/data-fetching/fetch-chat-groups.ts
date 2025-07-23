import { CHAT_GROUP_URL, CHAT_GROUP_USERS_URL } from "@/lib/apiEndPoints";

export async function fetchChatGroups(token: string) {
  const res = await fetch(CHAT_GROUP_URL, {
    headers: {
      Authorization: token,
    },
    next: {
      revalidate: 0,
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

export async function fetchChatGroup(id: string) {
  const res = await fetch(`${CHAT_GROUP_URL}/${id}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch chat group's data!!");
  }

  const result = await res.json();

  if (result?.data) {
    return result?.data;
  }

  return null;
}

export async function fetchChatGroupUsers(id: string) {
  const res = await fetch(`${CHAT_GROUP_USERS_URL}?group_id=${id}`, {
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

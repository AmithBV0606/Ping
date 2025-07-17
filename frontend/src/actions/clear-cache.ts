"use server";

import { revalidateTag } from "next/cache";

export async function ClearCache(tag: string) {
  revalidateTag(tag);
}

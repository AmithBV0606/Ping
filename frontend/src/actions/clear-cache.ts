"use server";

import { revalidatePath } from "next/cache";

export async function ClearCache(tag: string) {
  revalidatePath(tag);
}

"use server";

import { redirect } from "next/navigation";

export async function navigate(path, type = "push") {
  redirect(`${path}`, type);
}

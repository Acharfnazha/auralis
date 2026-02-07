import { NextResponse } from "next/server";

export async function PATCH() {
  return NextResponse.json({ ok: true, message: "Stub preferences update endpoint." });
}

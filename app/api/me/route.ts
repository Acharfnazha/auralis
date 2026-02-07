import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ ok: true, user: { id: "demo", email: "demo@auralis.ai", display_name: "Demo User" } });
}

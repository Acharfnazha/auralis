import { NextResponse } from "next/server";
import { moodPlaylists } from "@/lib/data/mock";

export async function GET() {
  return NextResponse.json({ ok: true, data: moodPlaylists });
}

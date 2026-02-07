import { NextResponse } from "next/server";
import { tracks } from "@/lib/data/mock";

export async function GET() {
  return NextResponse.json({ ok: true, data: tracks });
}

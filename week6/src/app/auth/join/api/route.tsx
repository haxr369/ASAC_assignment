import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const pwd = JSON.stringify(body.pwd);
  const id = JSON.stringify(body.id);
  return NextResponse.json({ id, pwd });
}

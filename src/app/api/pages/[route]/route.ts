import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  
  const data = await Promise.resolve({ title: "Home Page", description: "This is the home page of my website" });

  return NextResponse.json(data);
}

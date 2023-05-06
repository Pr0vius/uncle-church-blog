import { NextResponse } from "next/server";
import { pages } from "@/utils/data";

interface Context {
  params: {
    route: string;
  };
}

export function GET(req: Request, ctx: Context) {
  const page  = pages?.find(page => page.route === ctx.params.route);
  if (!page) return new Response("Not Found", { status: 404 })
  return NextResponse.json(page.metadata)
}

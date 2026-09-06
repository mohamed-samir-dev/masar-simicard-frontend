import { NextRequest, NextResponse } from "next/server";
import { getBackend, forwardCookies } from "../admin/_lib";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.toString();
  const res = await fetch(`${getBackend()}/api/products${search ? `?${search}` : ""}`, forwardCookies(req, { method: "GET" }));
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}

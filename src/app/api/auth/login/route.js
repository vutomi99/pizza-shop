

import { NextResponse } from "next/server";
import { prisma } from "@/instances/prisma";

export async function GET(req, res) {
  return NextResponse.json({ message: "Hello from Next.js 15!" });
}

export async function POST(req, res) {
  const data = await req.json();
  const { email, password } = data;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) return NextResponse.json({ message: "Invalid credentials" });

  return NextResponse.json({ user });
}

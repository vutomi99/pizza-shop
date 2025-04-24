

import { NextResponse } from "next/server";
import { prisma } from "@/instances/prisma";

export async function GET(req, res) {
  return NextResponse.json({ message: "Hello from Next.js 15!" });
}

export async function POST(req, res) {
  const data = await req.json();

  const { passwordConfirmation, ...newUserData } = data;

  const newUser = await prisma.user.create({
    data: newUserData,
  });

  console.log("Created user:", newUser); // Log the received data for debugging
  return NextResponse.json({ user: newUser });
}

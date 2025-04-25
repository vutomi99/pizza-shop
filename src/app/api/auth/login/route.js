import { NextResponse } from "next/server";
import { prisma } from "@/instances/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWT_SECRET = process.env.JWT_SECRET 

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

 
  const token = jwt.sign(
    { id: user.id, email: user.email }, 
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  return NextResponse.json({
    message: "Successfully logged in",
    token,
    user: { ...user, password: undefined },
  });
}

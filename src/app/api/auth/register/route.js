import { NextResponse } from "next/server";
import { prisma } from "@/instances/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  const data = await req.json();
  const { name, surname, email, phone, address, password } = data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ message: "Email already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      name,
      surname,
      phone,
      address,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ message: "User registered successfully", user: { ...newUser, password: undefined } });
}

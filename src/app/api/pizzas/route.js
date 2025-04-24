import { NextResponse } from "next/server";
import prisma from "@/instances/prisma";

export async function GET() {
  const pizzas = await prisma.pizza.findMany();
  return NextResponse.json(pizzas);
}

export async function POST(req) {
  const body = await req.json();
  const { name, description, price,image } = body;

  const newPizza = await prisma.pizza.create({
    data: { name, description, price:parseFloat(price), image, },
  });

  return NextResponse.json(newPizza, { status: 201 });
}

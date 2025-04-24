import { NextResponse } from "next/server";
import { prisma } from "@/instances/prisma";

export async function GET() {
  const pizzas = await prisma.pizza.findMany();
  return NextResponse.json(pizzas);
}

export async function POST(req, res) {
  const body = await req.json();

  const { name, description, price, image } = body;
  try {
    const newPizza = await prisma.pizza.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        image,
      },
    });

    return NextResponse.json(newPizza, { status: 201 });
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }

  return NextResponse.json(newPizza);
}

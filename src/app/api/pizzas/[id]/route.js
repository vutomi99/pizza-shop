import { NextResponse } from "next/server";
import {prisma} from "@/instances/prisma";

//Get single pizza by ID
export async function GET(_, { params }) {
  const { pizzaId } = params;
  const pizza = await prisma.pizza.findUnique({
    where: { pizzaId },
  });

  if (!pizza) {
    return NextResponse.json({ error: "Pizza not found" }, { status: 404 });
  }

  return NextResponse.json(pizza);
}

// UPDATE a pizza
export async function PUT(req, { params }) {
  const { pizzaId } = params;
  const body = await req.json();
  const { name, description, price, image } = body;

  try {
    const updatedPizza = await prisma.pizza.update({
      where: { pizzaId },
      data: {
        name,
        description,
        price: parseFloat(price),
        image,
      },
    });

    return NextResponse.json(updatedPizza);
  } catch (error) {
    return NextResponse.json(
      { error: "Pizza not found or update failed" },
      { status: 404 }
    );
  }
}

// DELETE a pizza
export async function DELETE(_, { params }) {
  const { pizzaId } = params;

  try {
    await prisma.pizza.delete({
      where: { pizzaId },
    });
    return NextResponse.json({ message: "Pizza deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Pizza not found or delete failed" },
      { status: 404 }
    );
  }
}

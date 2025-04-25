import { NextResponse } from "next/server";
import { prisma } from "@/instances/prisma";

//View a single topping

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const topping = await prisma.topping.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!topping) {
      return NextResponse.json({ error: "Topping not found" }, { status: 404 });
    }
    return NextResponse.json(topping);
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

//Update a topping

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  const { name, price } = body;
  try {
    const updatedTopping = await prisma.topping.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        price: parseFloat(price),
      },
    });
    return NextResponse.json(updatedTopping);
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
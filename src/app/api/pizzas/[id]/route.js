import { NextResponse } from "next/server";
import { prisma } from "@/instances/prisma";

// GET pizza by IDhelp
export async function GET(request, { params }) {
  const { id } = await params;
  console.log("id", id);

  if (!id) {
    return NextResponse.json({ error: "Invalid pizza ID" }, { status: 400 });
  }

  try {
    const pizza = await prisma.pizza.findUnique({
      where: { pizzaId: id },
    });

    if (!pizza) {
      return NextResponse.json({ error: "Pizza not found" }, { status: 404 });
    }

    return NextResponse.json(pizza);
  } catch (error) {
    console.error("Error fetching pizza:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

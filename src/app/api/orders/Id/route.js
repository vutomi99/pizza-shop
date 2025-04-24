import { NextResponse } from "next/server";
import prisma from "@/instances/prisma";


//view order 
export async function GET(_, { params }) {
  const { orderId } = params;

  try {
    const order = await prisma.order.findUnique({
      where: { orderId },
      include: {
        orderItems: {
          include: {
            pizza: true,
            size: true,
            kind: true,
            toppings: {
              include: {
                topping: true,
              },
            },
          },
        },
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

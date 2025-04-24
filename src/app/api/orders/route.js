import { NextResponse } from "next/server";
import prisma from "@/instances/prisma";


//fetch all orders
export async function GET() {
  const orders = await prisma.order.findMany();
  return NextResponse.json(orders);
}

//New order
export async function POST(req) {
  const body = await req.json();
  const { quantity, status, totalPrice } = body;

  const newOrder = await prisma.order.create({
    data: { quantity, status, totalPrice:parseFloat(totalPrice) },
  });

  return NextResponse.json(newOrder, { status: 201 });
}


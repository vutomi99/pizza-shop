import { NextResponse } from "next/server";
import { prisma } from "@/instances/prisma";

//Get all toppings
export async function GET() {
    const toppings = await prisma.topping.findMany();
    return NextResponse.json(toppings);
  }

  //create a new topping

export async function POST(req) {
    const body = await req.json();
  
    const { name, price } = body;
    try {
      const newTopping = await prisma.topping.create({
        data: {
          name,
          price: parseFloat(price)
          
        },
      });
  
      return NextResponse.json(newTopping, { status: 201 });
    } catch (error) {
      console.log("Error", error);
      return NextResponse.json({ error: error }, { status: 500 });
    }
  
    return NextResponse.json(newTopping);
  }



import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { priceId, plano } = body;

    if (!priceId || !plano) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
    }

   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
        {
        price: priceId,
        quantity: 1,
        },
    ],
    success_url: `${baseUrl}/`,
    cancel_url: `${baseUrl}/`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error("Stripe session error:", err);
    return NextResponse.json({ error: "Erro ao criar sessão" }, { status: 500 });
  }
}


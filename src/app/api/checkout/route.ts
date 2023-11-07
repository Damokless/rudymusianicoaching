import { NextResponse } from "next/server";

const stripe = require('stripe')(process.env.API_KEY_STRIPE_SECRET);

export async function POST(req : Request) {
  const { plan, fullName, mail, phone, age, objectifs, pastSports, body, dispos, diseases, journey, alergies, week, complements, materiel, lifestyle, options} = await req.json()
  const PRICE_ID = plan === 'ONE_MONTH' ? process.env.ONE_MONTH_PLAN_STRIPE_ID : process.env.THREE_MONTH_PLAN_STRIPE_ID
  const formule = plan === 'ONE_MONTH' ? '1 mois' : '3 mois'

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: PRICE_ID,
        quantity: 1,
      },
    ],
    metadata: {
      fullName,
      mail,
      phone,
      age,
      objectifs,
      pastSports,
      body,
      dispos,
      diseases,
      journey,
      alergies,
      week,
      complements,
      materiel,
      lifestyle,
      options,
      formule
    },
    mode: 'payment',
    invoice_creation: {
        enabled: true,
    },
    success_url: `http://localhost:3000/success/{CHECKOUT_SESSION_ID}`,
    cancel_url: 'https://rudymusianicoaching.vercel.app',
  });

  return NextResponse.json({session : session.url})
}
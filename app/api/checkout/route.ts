// // /app/api/checkout/route.ts
// import Stripe from "stripe";
// import { NextRequest, NextResponse } from "next/server";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//     apiVersion: "2023-08-16",
// });

// export async function POST(req: NextRequest) {
//     const items = await req.json();

//     const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         mode: "payment",
//         line_items: items.map((item: any) => ({
//             price_data: {
//                 currency: "pln",
//                 product_data: {
//                     name: item.title,
//                 },
//                 unit_amount: Math.round(item.price * 100), // cena w groszach
//             },
//             quantity: item.quantity,
//         })),
//         success_url: "https://twojsklep.pl/sukces",
//         cancel_url: "https://twojsklep.pl/anulowano",
//     });

//     return NextResponse.json({ url: session.url });
// }

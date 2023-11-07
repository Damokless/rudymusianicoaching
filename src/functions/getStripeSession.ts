const stripe = require('stripe')(process.env.API_KEY_STRIPE_SECRET);
export default async function getStripeSession(id : string | null) {
    const stripe_session = await stripe.checkout.sessions.retrieve(id);
    return stripe_session
}
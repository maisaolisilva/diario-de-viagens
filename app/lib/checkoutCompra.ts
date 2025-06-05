export const checkout = async (priceId: string, plano: string) => {
  const response = await fetch("/api/checkout_sessions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ priceId, plano}),
  });

  const data = await response.json();
  if (data.sessionId) {
    const stripe = await (await import("@stripe/stripe-js")).loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    );
    await stripe?.redirectToCheckout({ sessionId: data.sessionId });
  } else {
    console.error("Erro ao criar sessão:", data.error);
  }
};

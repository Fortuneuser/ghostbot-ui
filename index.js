// src/pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>GhostBot Marketplace</title>
        <meta name="description" content="Ton hub de bots automatisés & IA" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        <h1 className="text-4xl font-bold mb-4">👻 GhostBot Marketplace</h1>
        <p className="mb-8 text-center text-gray-400 max-w-xl">
          Bienvenue sur ta plateforme. Clique sur un bot pour lancer le paiement automatisé via Stripe.
        </p>

        <a
          href="/api/stripe-link?bot=ghost-ai" // Ce lien sera généré automatiquement
          className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-lg text-white font-semibold transition"
        >
          💳 Acheter Ghost AI Bot
        </a>
      </main>
    </>
  )
}

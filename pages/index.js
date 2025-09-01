import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-ghost text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">👻 Welcome to GhostBot™</h1>
      <p className="text-neon text-xl mb-8">Marketplace IA de bots automatisés</p>
      <Link href="/bots" className="bg-neon text-black px-6 py-3 rounded hover:bg-lime-400">Voir les Bots</Link>
    </div>
  )
}

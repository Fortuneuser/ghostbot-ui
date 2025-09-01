import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Bots() {
  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch('/api/bots')
      .then(res => res.json())
      .then(setBots)
  }, [])

  return (
    <div className="bg-ghost text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">🤖 Bots disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bots.map(bot => (
          <div key={bot.name} className="bg-black border border-neon p-6 rounded">
            <h2 className="text-2xl font-semibold mb-2">{bot.name}</h2>
            <Link href={bot.url} className="text-neon underline">Commander →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

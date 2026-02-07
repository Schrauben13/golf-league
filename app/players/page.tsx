import Link from "next/link";
import { players } from "../lib/mockLeague";


export default function PlayersPage() {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h1
          className="text-3xl font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          Players
        </h1>
        <p className="text-base text-zinc-700">
          Select a player to view details and recent rounds.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {players.map((player) => (
          <Link
            key={player.id}
            href={`/players/${player.id}`}
            className="rounded-lg border bg-white p-4 transition hover:shadow-sm"
            style={{ borderColor: "var(--augusta-gold)" }}
          >
            <div className="text-base font-semibold text-zinc-900">
              {player.name}
            </div>
            <div className="text-sm text-zinc-700">
              Handicap Index:{" "}
              {player.handicapIndex !== undefined
                ? player.handicapIndex.toFixed(1)
                : "N/A"}
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900">
        <div>Player link hrefs:</div>
        <div>
          {players.map((player) => `/players/${player.id}`).join(", ")}
        </div>
      </div>
    </section>
  );
}

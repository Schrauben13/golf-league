import Link from "next/link";
import { getRounds } from "../lib/leagueRepo";

export default async function RoundsPage() {
  const rounds = await getRounds();

  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h1
          className="text-3xl font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          Rounds
        </h1>
        <p className="text-base text-zinc-700">
          Select a week to view the leaderboard.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {rounds.map((round) => (
          <Link
            key={round.id}
            href={`/rounds/${round.id}`}
            className="rounded-lg border bg-white p-4 transition hover:shadow-sm"
            style={{ borderColor: "var(--augusta-gold)" }}
          >
            <div className="text-base font-semibold text-zinc-900">
              Week {round.week}
            </div>
            <div className="text-sm text-zinc-700">
              Date: {round.date.toISOString().slice(0, 10)}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

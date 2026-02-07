"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { players, rounds, scores } from "../../lib/mockLeague";

export default function PlayerPage() {
  const params = useParams();
  const id =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
        ? params.id[0]
        : "";

  if (!id) {
    return (
      <section className="space-y-4">
        <h1
          className="text-3xl font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          Missing player id
        </h1>
        <p className="text-base text-zinc-700">
          We did not receive a player id in the URL.
        </p>
        <Link
          href="/players"
          className="text-sm font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          Back to Players
        </Link>
      </section>
    );
  }

  const player = players.find((entry) => entry.id === id);

  if (!player) {
    return (
      <section className="space-y-4">
        <h1
          className="text-3xl font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          Player Not Found
        </h1>
        <p className="text-base text-zinc-700">
          We could not find a player with id:{" "}
          <span className="font-semibold text-zinc-900">{id}</span>
        </p>
        <Link
          href="/players"
          className="text-sm font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          Back to Players
        </Link>
      </section>
    );
  }

  const recentRounds = rounds
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)
    .map((round) => {
      const score = scores.find(
        (entry) => entry.roundId === round.id && entry.playerId === player.id
      );

      return {
        roundId: round.id,
        week: round.week,
        date: round.date,
        gross: score?.gross ?? null,
        net: score?.net ?? null,
      };
    });

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <h1
          className="text-3xl font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          {player.name}
        </h1>
        <div className="text-sm text-zinc-700">
          Email: {player.email ?? "N/A"}
        </div>
        <div className="text-sm text-zinc-700">
          Handicap Index:{" "}
          {player.handicapIndex !== undefined
            ? player.handicapIndex.toFixed(1)
            : "N/A"}
        </div>
      </div>

      <div className="rounded-lg border bg-white p-4">
        <div className="mb-3 text-base font-semibold text-zinc-900">
          Recent Rounds
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-700">
            <thead className="border-b text-xs uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-2 py-2">Week</th>
                <th className="px-2 py-2">Date</th>
                <th className="px-2 py-2">Gross</th>
                <th className="px-2 py-2">Net</th>
              </tr>
            </thead>
            <tbody>
              {recentRounds.map((round) => (
                <tr key={round.roundId} className="border-b last:border-0">
                  <td className="px-2 py-2">Week {round.week}</td>
                  <td className="px-2 py-2">{round.date}</td>
                  <td className="px-2 py-2">
                    {round.gross !== null ? round.gross : "—"}
                  </td>
                  <td className="px-2 py-2">
                    {round.net !== null ? round.net : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Link
        href="/players"
        className="text-sm font-semibold"
        style={{ color: "var(--augusta-green)" }}
      >
        Back to Players
      </Link>
    </section>
  );
}

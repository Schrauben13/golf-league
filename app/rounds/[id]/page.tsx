"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { players, rounds, scores } from "../../lib/mockLeague";

export default function RoundDetailPage() {
  const params = useParams();
  const id =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
        ? params.id[0]
        : "";

  const round = rounds.find((entry) => entry.id === id);

  if (!round) {
    return (
      <section className="space-y-4">
        <h1
          className="text-3xl font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          Round Not Found
        </h1>
        <p className="text-base text-zinc-700">
          We could not find a round with id:{" "}
          <span className="font-semibold text-zinc-900">{id}</span>
        </p>
        <Link
          href="/rounds"
          className="text-sm font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          Back to Rounds
        </Link>
      </section>
    );
  }

  const roundScores = scores.filter((score) => score.roundId === round.id);
  const allNetPresent = roundScores.every(
    (score) => score.net !== null && score.net !== undefined
  );

  const leaderboard = roundScores
    .map((score) => {
      const player = players.find((entry) => entry.id === score.playerId);

      return {
        id: score.id,
        playerName: player?.name ?? "Unknown Player",
        gross: score.gross,
        net: score.net ?? null,
      };
    })
    .sort((a, b) => {
      if (allNetPresent) {
        return (a.net ?? 0) - (b.net ?? 0);
      }
      return a.gross - b.gross;
    });

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <h1
          className="text-3xl font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          Week {round.week}
        </h1>
        <div className="text-sm text-zinc-700">
          Week {round.week} • {round.date} • {leaderboard.length} Players Scored
        </div>
      </div>

      <div className="rounded-lg border bg-white p-4">
        <div className="mb-3 text-base font-semibold text-zinc-900">
          Leaderboard
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-700">
            <thead className="border-b text-xs uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-2 py-2">Player</th>
                <th className="px-2 py-2">Gross</th>
                <th className="px-2 py-2">Net</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry) => (
                <tr key={entry.id} className="border-b last:border-0">
                  <td className="px-2 py-2 font-medium text-zinc-900">
                    {entry.playerName}
                  </td>
                  <td className="px-2 py-2">{entry.gross}</td>
                  <td className="px-2 py-2">
                    {entry.net !== null ? entry.net : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Link
        href="/rounds"
        className="text-sm font-semibold"
        style={{ color: "var(--augusta-green)" }}
      >
        Back to Rounds
      </Link>
    </section>
  );
}

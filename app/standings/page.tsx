import { getStandingsForSeason } from "../lib/leagueRepo";
import { prisma } from "../lib/prisma";

export default async function StandingsPage() {
  const season = await prisma.season.findFirst({
    orderBy: { startDate: "desc" },
  });

  const standings = season ? await getStandingsForSeason(season.id) : [];

  const leaderboard = standings.slice().sort((a, b) => {
    const totalNetA = a.totalNet ?? Number.POSITIVE_INFINITY;
    const totalNetB = b.totalNet ?? Number.POSITIVE_INFINITY;
    if (totalNetA !== totalNetB) {
      return totalNetA - totalNetB;
    }
    return a.totalGross - b.totalGross;
  });

  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <h1
          className="text-3xl font-semibold"
          style={{ color: "var(--augusta-green)" }}
        >
          Standings
        </h1>
        <div className="text-sm text-zinc-700">
          {season?.name ?? "Season"} • Last updated:{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      <div className="rounded-lg border bg-white p-4">
        <div className="mb-3 text-base font-semibold text-zinc-900">
          Season Totals
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-700">
            <thead className="border-b text-xs uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-2 py-2">Rank</th>
                <th className="px-2 py-2">Player</th>
                <th className="px-2 py-2">Rounds</th>
                <th className="px-2 py-2">Total Net</th>
                <th className="px-2 py-2">Total Gross</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={entry.playerId} className="border-b last:border-0">
                  <td className="px-2 py-2">{index + 1}</td>
                  <td className="px-2 py-2 font-medium text-zinc-900">
                    {entry.playerName}
                  </td>
                  <td className="px-2 py-2">{entry.roundsPlayed}</td>
                  <td className="px-2 py-2">
                    {entry.totalNet !== null ? entry.totalNet : "—"}
                  </td>
                  <td className="px-2 py-2">{entry.totalGross}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

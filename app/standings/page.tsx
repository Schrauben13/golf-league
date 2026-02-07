import { players, seasons } from "../lib/mockLeague";
import {
  calculateSeasonStandings,
  pointsConfig,
} from "../lib/pointsEngine";

export default function StandingsPage() {
  const season = seasons[0];
  const standings = calculateSeasonStandings(season?.id ?? "");

  const leaderboard = standings
    .map((entry) => {
      const player = players.find((item) => item.id === entry.playerId);
      return {
        ...entry,
        name: player?.name ?? "Unknown Player",
      };
    })
    .sort((a, b) => {
      if (b.pointsTotal !== a.pointsTotal) {
        return b.pointsTotal - a.pointsTotal;
      }
      if (b.wins !== a.wins) {
        return b.wins - a.wins;
      }
      const totalNetA = a.totalNet ?? Number.POSITIVE_INFINITY;
      const totalNetB = b.totalNet ?? Number.POSITIVE_INFINITY;
      if (totalNetA !== totalNetB) {
        return totalNetA - totalNetB;
      }
      const lastNetA = a.lastRoundNet ?? Number.POSITIVE_INFINITY;
      const lastNetB = b.lastRoundNet ?? Number.POSITIVE_INFINITY;
      return lastNetA - lastNetB;
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
          {season?.name ?? "Season"} • Last updated: February 7, 2026
        </div>
        <div className="rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900">
          <div>
            Points: {pointsConfig.placementPoints.join(", ")} for 1st through{" "}
            {pointsConfig.placementPoints.length}th, plus{" "}
            {pointsConfig.participationPoints} point for participation.
          </div>
          <div>
            Rankings use {pointsConfig.useNet ? "net" : "gross"} scores; ties
            split placement points evenly.
          </div>
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
                <th className="px-2 py-2">Points</th>
                <th className="px-2 py-2">Wins</th>
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
                    {entry.name}
                  </td>
                  <td className="px-2 py-2">
                    {entry.pointsTotal.toFixed(1)}
                  </td>
                  <td className="px-2 py-2">{entry.wins}</td>
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
